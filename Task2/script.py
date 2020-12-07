from pathlib import Path
import os
import hashlib

_this_file = Path(__file__).resolve()

DIR_PATH = _this_file.parent.resolve()
DIR_TASK = (DIR_PATH / "test_folder").resolve()


def get_file_from_dir():
    list_of_files = os.listdir(DIR_TASK)
    os.chdir(DIR_TASK)
    return list_of_files


def get_text_from_file(list_of_files):
    for file in list_of_files:
        with open(file, "rb") as f:
            data = f.read()
            hash_data = hashlib.sha3_256(data).hexdigest()
            print(file + " " + hash_data)


if __name__ == "__main__":
    list_of_files = get_file_from_dir()
    get_text_from_file(list_of_files)
