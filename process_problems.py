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

# Problem name mapping
problem_name_mapping = {
    "binary_gap": "1-BinaryGap",
    "cyclic_rotation": "1-CyclicRotation",
    "odd_occurrences_in_array": "2-OddOccurrencesInArray",
    "tape_equilibrium": "1-TapeEquilibrium",
    "frog_jump": "2-FrogJump",
    "perm_missing_elem": "3-PermMissingElem",
    "perm_check": "1-PermCheck",
    "frog_river_one": "2-FrogRiverOne",
    "missing_integer": "3-MissingInteger",
    "max_counters": "4-MaxCounters",
    "count_div": "1-CountDiv",
    "passing_cars": "2-PassingCars",
    "genomic_range_query": "3-GenomicRangeQuery",
    "min_avg_2_slice": "4-MinAvgTwoSlice",
    "distinct": "1-Distinct",
    "triangle": "2-Triangle",
    "max_product_of_3": "3-MaxProductOfThree",
    "disc_intersections": "4-DiscIntersections",
    "brackets_spec": "1-Brackets",
    "fish": "2-Fish",
    "stonewall": "3-StoneWall",
    "nesting": "4-Nesting",
    "dominator": "1-Dominator",
    "equi_leader": "2-EquiLeader",
    "max_slice_sum": "1-MaxSliceSum",
    "max_double_slice_sum": "2-MaxDoubleSliceSum",
    "max_profit": "3-MaxProfit",
    "count_factors": "1-CountFactors",
    "min_perimeter_rectangle": "2-MinPerimeterRectangle",
    "peaks": "3-Peaks",
    "flags": "4-Flags",
    "count_semiprimes": "1-CountSemiprimes",
    "count_not_divisible": "2-CountNonDivisible",
    "chocolates_by_numbers": "1-ChocolatesByNumbers",
    "common_prime_divisors": "2-CommonPrimeDivisors",
    "ladder": "1-Ladder",
    "frog": "2-FibFrog",
    "nailing_planks": "1-NailingPlanks",
    "min_max_division": "2-MinMaxDivision",
    "abs_distinct": "1-AbsDistinct",
    "count_triangles": "2-CountTriangles",
    "count_distinct_slices": "3-CountDistinctSlices",
    "max_nonoverlapping_segments": "1-MaxNonOverlappingSegments",
    "tie_ropes": "2-TieRopes",
    "number_solitaire": "1-NumberSolitaire",
    "min_abs_sum_spec": "2-MinAbsSum",
    "str_symmetry_point": "1-StrSymmetryPoint",
    "tree_height": "2-TreeHeight"
}

# Root directory of the repository
repo_root = os.getcwd()
lessons_dir = os.path.join(repo_root, "lessons")

# Get all problem files from the root of the repository
problem_files = []
for file in os.listdir(repo_root):
    if re.match(r'^\d{2}-\d+-.*\.(rb|js)$', file):
        problem_files.append(file)

# Iterate through the lessons directory to find problems that need conversion
for lesson_folder in os.listdir(lessons_dir):
    lesson_path = os.path.join(lessons_dir, lesson_folder)
    if os.path.isdir(lesson_path):
        for problem_folder in os.listdir(lesson_path):
            problem_path = os.path.join(lesson_path, problem_folder)
            if os.path.isdir(problem_path):
                # Check for existing Ruby or JavaScript solution and absence of TypeScript solution
                rb_solution = os.path.join(problem_path, "solution.rb")
                js_solution = os.path.join(problem_path, "solution.js")
                ts_solution = os.path.join(problem_path, "solution.ts")

                if (os.path.exists(rb_solution) or os.path.exists(js_solution)) and not os.path.exists(ts_solution):
                    print(f"Found unconverted problem: {lesson_folder}/{problem_folder}")
                    # For now, just print. Later, we'll add logic to read and convert.

print("Processing complete.")
