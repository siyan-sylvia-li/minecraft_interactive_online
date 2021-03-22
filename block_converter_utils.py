from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import glob


def check_non_empty(val):
    """
    If val represents a non-empty pixel value, return True
    :param val: the pixel value
    :return: True when non-empty
    """
    if hasattr(val, 'dtype'):
        try:
            val = val.item()
        except ValueError:
            if hasattr(val, 'len'):
                return len(val) > 0
    if type(val) == int:
        return val
    if len(val) == 4:
        return val[-1]


def isolate_plane(data):
    # First, we look for the biggest width
    all_img_pixels = [[index for index, val in enumerate(data[i]) if check_non_empty(val)]
                      for i in range(data.shape[0])]
    # print(all_img_pixels)
    all_beginning = [(a[0], i) for i, a in enumerate(all_img_pixels) if a]
    all_ending = [(a[-1], i) for i, a in enumerate(all_img_pixels) if a]
    # Width is the max - min
    min_x = min(all_beginning)[0]
    max_x = max(all_ending)[0]
    data = data[:, min_x: max_x + 1]

    # Chopping it in half
    data = data[:, :int(data.shape[1] / 2)]

    # Crop off the top plane
    # Need the height
    all_vertical = [ind for val, ind in all_beginning if val == min_x]
    height = all_vertical[-1] - all_vertical[0]
    # Iterate through the columns
    # Check the bottom-most non-zero
    for j in range(data.shape[1]):
        non_zero_col = [index for index, val in enumerate(data[:, j]) if check_non_empty(val)]
        data[: non_zero_col[-1] - height, j] = 0

    non_zero_first = [index for index, val in enumerate(data[:, 0]) if check_non_empty(val)]
    data = data[non_zero_first[-1] - height + 1:, :]

    offset_vertical = data.shape[0] - height
    coords = [(0, 0), (0, height), (data.shape[1], data.shape[0]), (data.shape[1], offset_vertical)]
    return data, coords, height


def find_coeffs(pa, pb):
    matrix = []
    for p1, p2 in zip(pa, pb):
        matrix.append([p1[0], p1[1], 1, 0, 0, 0, -p2[0]*p1[0], -p2[0]*p1[1]])
        matrix.append([0, 0, 0, p1[0], p1[1], 1, -p2[1]*p1[0], -p2[1]*p1[1]])

    A = np.matrix(matrix, dtype=np.float)
    B = np.array(pb).reshape(8)

    res = np.dot(np.linalg.inv(A.T * A) * A.T, B)
    return np.array(res).reshape(8)


def shear_cropped_image(data, coords, height):
    img = Image.fromarray(data)
    scale = 1
    new_height = scale * height
    coeffs = find_coeffs([(0, 0),
                          (new_height, 0), (new_height, new_height), (0, new_height) ],
                         coords)
    img = img.transform((new_height, new_height),
                  Image.AFFINE,
                  coeffs, Image.NEAREST)

    img = img.transpose(Image.ROTATE_270).transpose(Image.FLIP_LEFT_RIGHT)
    return img


def extract_image_from_file(img_file):
    img = Image.open(img_file)
    print(img.mode)
    data_copy = np.asarray(img).copy()
    data_cropped, coordinates, pane_height = isolate_plane(data_copy)
    data_sheared = shear_cropped_image(data_cropped, coordinates, pane_height)
    disp_img = data_sheared
    if img.palette is not None:
        final_img = data_sheared.quantize(palette=img, dither=False)
        disp_img = final_img
    disp_img.save(img_file.replace("block_images/", "block_face_images/").replace(".png", "_face.png"), format="png")


"""
    Generating a list of block face images based on block images
"""
for img_file in glob.glob("TempBlockStorage/block_images/*.png"):
    print(img_file)
    extract_image_from_file(img_file)