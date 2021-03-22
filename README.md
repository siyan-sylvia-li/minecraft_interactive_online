# Online Minecraft Interactive Evolution Tool

This repository is a developing project for displaying Minecraft structures evolved using Cellular Automata and modified by humans as well as allowing users to interact with these structures by adding and removing blocks from the structures. Users can publish evolved structures after some modification or just publishing them as is.

### TODO
- Integrate Jupyter Notebook into a static website
- Collect more images for block faces

### Setup
```
pip install numpy nbtlib pyvista
```
#### Displaying PyVista in Jupyter Notebooks
Follow the installation guide [here](https://docs.pyvista.org/plotting/notebook_plotting/ipyvtk_plotting.html#installation).

### Usage
1. Open the Jupyter Notebook in the cloned repository
2. Put whatever NBT file you wish to load in the NBTs folder
3. Modify the `load_nbt_file_plot()` line in Jupyter Notebook to the NBT file path you choose
4. Run the Notebook!
5. You can click the "Save" button to save your modified NBT file
