import pyvista as pv
import numpy as np
import nbtlib
from block_picker import Picker
from checkbox_callbacks import *
from save_nbt_callback import *
import faulthandler

pv.rcParams['use_ipyvtk'] = True

faulthandler.enable()

###############################################################################
# Keep track of point updates using Ordered Dict
ordered_points = []
###############################################################################

# Copying from Djordje's code
def extract_nbt_blocks(load_file):
    nbt_struct = nbtlib.load(load_file)
    nbt_blocks = nbt_struct.root["blocks"]
    nbt_palette = nbt_struct.root["palette"]


    block_data = dict()
    for b in nbt_blocks:
        type_name = nbt_palette[b['state']]['Name'].replace('minecraft:', "")
        if type_name != 'air':
            if type_name not in block_data:
                block_data[type_name] = [b['pos']]
            else:
                block_data[type_name].append(b['pos'])
            ordered_points.append(tuple(b['pos']))
    return block_data, nbt_struct


def add_block_extras(plotter, block_data_):
    textures = block_data_.keys()
    x, y = 80, 70
    size = 30
    block_add_manager = BlockAddManager()
    # All the actors for the add block functionality
    list_add_block_actors = []
    for i, texture in enumerate(textures):
        # Add Checkbox
        checkbox_actor = plotter.add_checkbox_button_widget(BlockTypeCheckboxCallback(texture, block_add_manager),
                                                            position=(x, y + i * (size + 20)), size=size,
                                                            color_off='grey', color_on='green')
        # Add text
        text_actor = plotter.add_text("Add\n" + texture[0].upper() + texture[1:],
                                      position=(x + 40, y + i * (size + 20)),
                                      color='black', font_size=8)
        # list_add_block_actors.append(checkbox_actor)
        list_add_block_actors.append(text_actor)

    for act in list_add_block_actors:
        act.SetVisibility(False)
    return list_add_block_actors, block_add_manager


texture_dict = {'leaves2': 'TempBlockStorage/block_face_images/Dark_Oak_Leaves_BE2_face.png',
                'log2': 'TempBlockStorage/block_face_images/Dark_Oak_Log_(UD)_JE3_face.png',
                'gravel': 'TempBlockStorage/block_face_images/Gravel_JE5_BE4_face.png'}
# Using Jupyter Notebook to plot
pl = pv.Plotter(lighting=None, notebook=True)
# Loading Oak Tree (A HUGE structure, might take quite a while)
# block_data = extract_nbt_blocks("NBTs/Extra_dark_oak.nbt")


def load_nbt_file_plot(nbt_file):
    NBT_FILE = nbt_file

    # Loading Gravel Path (A lot faster)
    block_data, nbt_struct = extract_nbt_blocks(NBT_FILE)

    # Use glyphs to generate meshes for each block type
    # create a basic (1 x 1 x 1) cube
    cube = pv.Cube()

    blocks = {}
    poly_meshes = {}
    for block_type in block_data:
        # create a "point cloud" containing the centers of every cube
        new_points = np.array(block_data[block_type])
        mesh = pv.PolyData(new_points)
        poly_meshes.update({block_type: mesh})

        # use a glyph filter to create a cube at each point in polydata
        glyphs = mesh.glyph(geom=cube)
        glyphs.textures[block_type] = pv.read_texture(texture_dict[block_type])
        blocks.update({block_type: glyphs})

    ###############################################################################
    # Plot

    # Use 3 lights because it's a bit brighter
    pl.background_color = 'w'
    pl.enable_3_lights()

    # we have to add block types one at a type since it seems we can only
    # apply one texture per block type.  This may complicate things with complicated or mixed block types.

    picker = Picker(pl, blocks, poly_meshes, ordered_points)
    pl.track_click_position(picker, side='right')

    for mesh in blocks.values():
        pl.add_mesh(mesh)

    add_actors, block_add_manager = add_block_extras(pl, block_data)
    picker.add_actors = add_actors
    picker.add_manager = block_add_manager
    picker.texture_dict = texture_dict

    # Save NBT Functionality
    nbt_save_callback = SaveNBTCallback(nbt_struct, NBT_FILE, picker)

    # Add checkbox widget
    # New checkbox manager
    master_checkbox = CheckboxManager(picker)
    # Delete
    pl.add_checkbox_button_widget(ToggleModeCallback(1, master_checkbox), position=(10.0, 10.0), value=False,
                                  color_off='grey', color_on='red')
    pl.add_text("Del", position=(18.0, 25.0), font_size=9)
    # Add
    pl.add_checkbox_button_widget(ToggleModeCallback(2, master_checkbox), position=(10.0, 70.0), value=False,
                                  color_off='grey', color_on='green')
    pl.add_text("Add", position=(15.0, 85.0), font_size=9)
    # Publish
    pl.add_checkbox_button_widget(nbt_save_callback, position=(10.0, 130.0), value=False, color_off='grey',
                                  color_on='yellow', size=60)
    pl.add_text("Save", position=(17.0, 148.0), font_size=9)
    # nice camera position
    # pl.camera_position = [(-62.243920852008635, 32.9620996859325, -20.346306010403953),
    #                       (11.0, 12.5, 12.0),
    #                       (0.23672597767457984, 0.9685471459959899, 0.07666314288520223)]


# this returns  camera position that you can use later for automated plots
# here, we also save a png screenshot
def show():
    pl.show(use_ipyvtk=True)
