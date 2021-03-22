import pyvista as pv
from checkbox_callbacks import *
import numpy as np
import faulthandler
from segfault_guard import *

faulthandler.enable()


class Picker:
    def __init__(self, plotter, meshes, poly_meshes, ordered_points):
        self.plotter = plotter
        self.meshes = meshes
        self.poly_meshes = poly_meshes
        self.ordered_points = ordered_points
        self._points = []
        self.cube = pv.Cube()
        # Multiple modes
        # MODES = ['None', 'Delete', 'Add']
        self.mode = 0
        # The block being added, only when 'Add' is selected
        self.texture_dict = None
        self.add_actors = None
        self.add_manager = None

        self.changed_blocks = []

    @property
    def points(self):
        """To access all the points when done."""
        return self._points

    def delete_block(self, mesh_key, point):
        ind = self.poly_meshes[mesh_key].find_closest_point(point)
        orig_pt = self.poly_meshes[mesh_key].points[ind]
        point_arr = np.delete(self.poly_meshes[mesh_key].points, ind, 0)
        self.render_plotter(mesh_key, point_arr)
        return np.asarray(orig_pt).astype(int), mesh_key

    def render_plotter(self, mesh_key, new_point_arr):
        """
        Make plotter re-render for a specific mesh with an updated point array
        :param mesh_key: the index of the mesh to be updated
        :param new_point_arr: the new point arr
        :return:
        """
        new_mesh = pv.PolyData(new_point_arr)
        if mesh_key in self.poly_meshes:
            self.poly_meshes[mesh_key].overwrite(new_mesh.copy())
        else:
            self.poly_meshes.update({mesh_key: new_mesh.copy()})
        new_mesh = new_mesh.glyph(geom=self.cube)
        if mesh_key in self.meshes:
            self.meshes[mesh_key].overwrite(new_mesh)
        else:
            self.meshes.update({mesh_key: new_mesh})
            self.plotter.add_mesh(new_mesh)

        self.plotter.render()

    def toggle_visibility_add_actors(self, state):
        for act in self.add_actors:
            act.SetVisibility(state)

    def add_block(self, pt):
        """
        Adding a block to the plotter and updating the mesh
        :param pt: The point to add the block to
        :return:
        """
        # Add checkboxes to plotter to allow picking of block types
        text_name = self.add_manager.block_type
        # TODO: Merge with pre-existing mesh
        # If the block type already exists, add to the existing mesh
        if text_name in self.poly_meshes:
            point_arr = np.append(self.poly_meshes[text_name].points, [pt], 0)
            self.render_plotter(text_name, point_arr)
        else:
            point_arr = np.array([pt])
            self.render_plotter(text_name, point_arr)
        return np.array(pt).astype(dtype=int), text_name

    def update_mode(self, mode):
        self.mode = mode

    def update_changed_blocks(self, pt, mesh_key, mode):
        pt = tuple(np.array(pt).astype(dtype=int))
        if mode == 1:
            ind = self.ordered_points.index(pt)
            self.ordered_points.remove(pt)
        else:
            # Add
            ind = len(self.ordered_points)
            self.ordered_points.append(pt)
        changed_block = {'pos': list(pt),
                         'type': mesh_key,
                         'mode': mode,
                         'index': ind}
        self.changed_blocks.append(changed_block)


    @sigsev_guard(default_value=-1, timeout=60)
    def intersection_points_ray_trace(self, picked_pt):
        direction = picked_pt - self.plotter.camera_position[0]
        direction = direction / np.linalg.norm(direction)
        start = picked_pt - 1000 * direction
        end = picked_pt + 10000 * direction
        # TODO: Implement reliable ray_trace function?
        points = [(self.meshes[mesh_key].ray_trace(start, end, first_point=True), mesh_key)
                  for mesh_key in self.meshes]
        return points

    def intersection_points_closest(self, picked_pt, points):
        min_dist = 100
        min_mesh = -1
        for i, pt in enumerate(points):
            if len(pt[0][1]):
                dist = np.sum(np.square(pt[0][0] - picked_pt))
                if dist < min_dist:
                    min_dist = dist
                    min_mesh = i
        return points[min_mesh][1], points[min_mesh][0][0]

    def __call__(self, *args):
        picked_pt = np.array(self.plotter.pick_click_position())
        print(picked_pt)
        points = self.intersection_points_ray_trace(picked_pt)
        # points = self.intersection_points_closest(picked_pt)
        print("POINTS Given", points)
        mesh_key, found_pt = self.intersection_points_closest(picked_pt, points)
        print("FOUND POINTS", points)
        if self.mode == 1:
            # Delete block
            print("DELETE BLOCK")
            pos, type = self.delete_block(mesh_key, found_pt)
            self.update_changed_blocks(pos, type, 1)
        elif self.mode == 2:
            print("ADD BLOCK")
            pos, type = self.add_block(picked_pt)
            self.update_changed_blocks(pos, type, 2)
        return
