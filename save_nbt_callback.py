"""
This class will be responsible for generating NBT files
"""
import nbtlib
from nbtlib.tag import String, List, Compound, IntArray, Int
import time
import datetime
import pyvista as pv
pv.rcParams['use_ipyvtk'] = True

class SaveNBTCallback:
    def __init__(self, original_nbt, NBT_NAME, picker):
        self.original_nbt = original_nbt
        self.picker = picker
        self.plotter = picker.plotter
        self.NBT_NAME = NBT_NAME
        self.palette_mapping = {}

    def update_coordinates(self):
        # Go through all the block types and update the set of positions
        for changed_block in self.changed_blocks:
            if changed_block['mode'] == 1:
                del self.original_nbt.root["blocks"][changed_block['index']]
                print("DELETED BLOCK")
            elif changed_block['mode'] == 2:
                palette_name = 'minecraft:' + changed_block['type']
                new_block = Compound({'pos': List[Int](changed_block['pos']),
                                      'state': Int(self.palette_mapping[palette_name])})
                self.original_nbt.root["blocks"].append(new_block)
                print("ADDED BLOCK")


    def find_palette_mapping(self):
        palette = self.original_nbt.root["palette"]
        for i, p in enumerate(palette):
            self.palette_mapping.update({p['Name']: i})

    def __call__(self, state):
        if state:
            # Save NBT files
            self.changed_blocks = self.picker.changed_blocks
            self.find_palette_mapping()
            self.update_coordinates()
            self.original_nbt.save(self.NBT_NAME.replace(".nbt", "_" + datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                                                         + ".nbt"))
            text_actor = self.plotter.add_text("Successfully Saved!", color='black', position=(200, 200))
            time.sleep(5)
            text_actor.SetVisibility(False)
