import os
import re
import shutil
from PyPDF2 import PdfReader

# Define the mapping from file prefixes to lesson names
lesson_mapping = {
    "01": "01-Iterations",
    "02": "02-Arrays", 
    "03": "03-TimeComplexity",
    "04": "04-CountingElements",
    "05": "05-PrefixSums",
    "06": "06-Sorting",
    "07": "07-StacksAndQueues",
    "08": "08-Leader",
    "09": "09-MaxSlice",
    "10": "10-PrimeNumbers",
    "11": "11-Sieve",
    "12": "12-Gcd",
    "13": "13-Fibonacci",
    "14": "14-BinarySearch",
    "15": "15-CaterpillarMethod",
    "16": "16-GreedyAlgorithms",
    "17": "17-DynamicProgramming"
}

# Root directory of the repository
repo_root = os.getcwd()
lessons_dir = os.path.join(repo_root, "lessons")

# Iterate through the lessons directory to find problems that need a less optimal solution
for lesson_folder in os.listdir(lessons_dir):
    lesson_path = os.path.join(lessons_dir, lesson_folder)
    if os.path.isdir(lesson_path):
        for problem_folder in os.listdir(lesson_path):
            problem_path = os.path.join(lesson_path, problem_folder)
            if os.path.isdir(problem_path):
                ts_solution = os.path.join(problem_path, "solution.ts")
                less_optimal_ts_solution = os.path.join(problem_path, "solution_less_optimal.ts")

                if os.path.exists(ts_solution) and not os.path.exists(less_optimal_ts_solution):
                    print(f"Problem needs less optimal solution: {lesson_folder}/{problem_folder}")

print("Processing complete.")


