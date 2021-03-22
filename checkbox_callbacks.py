class ToggleModeCallback:
    def __init__(self, toggle_mode, checkbox_manager):
        self.toggle_mode = toggle_mode
        self.checkbox_manager = checkbox_manager

    def __call__(self, state):
        self.checkbox_manager.update_picker(self.toggle_mode, state)


class CheckboxManager:
    def __init__(self, picker):
        self.picker = picker

    def update_picker(self, toggle_mode, state):
        if not state:
            if self.picker.mode == toggle_mode:
                self.picker.mode = 0
        else:
            if self.picker.mode != toggle_mode:
                self.picker.mode = toggle_mode
        # If the mode is to add, make sure to add things
        if self.picker.mode == 2:
            # Add the blocks
            self.picker.toggle_visibility_add_actors(True)
        else:
            self.picker.toggle_visibility_add_actors(False)


class BlockAddManager:
    def __init__(self):
        self.block_type = None

    def update_block_type(self, block_type):
        self.block_type = block_type


class BlockTypeCheckboxCallback:
    def __init__(self, block_type, block_add_manager):
        self.block_type = block_type
        self.block_add_manager = block_add_manager

    def __call__(self, state):
        if state:
            self.block_add_manager.update_block_type(self.block_type)