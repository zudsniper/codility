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

print(f"Found {len(problem_files)} problem files in root: {problem_files}")

for file_name in problem_files:
    match = re.match(r'^(?P<lesson_num>\d{2})-(?P<problem_num>\d+)-(?P<problem_slug>.*)\.(rb|js)$', file_name)
    if not match:
        print(f"Skipping {file_name}: does not match expected pattern.")
        continue

    lesson_num = match.group('lesson_num')
    problem_slug = match.group('problem_slug').replace('_', '-') # Replace underscores with hyphens for consistency

    lesson_folder_name = lesson_mapping.get(lesson_num)
    if not lesson_folder_name:
        print(f"Skipping {file_name}: No lesson mapping for {lesson_num}.")
        continue

    # Use the problem_name_mapping for the specific problem folder name
    problem_folder_name = problem_name_mapping.get(problem_slug.replace('-', '_')) # Convert back to underscore for map lookup
    if not problem_folder_name:
        print(f"Skipping {file_name}: No problem mapping for {problem_slug}.")
        continue

    # Construct new paths
    new_lesson_path = os.path.join(lessons_dir, lesson_folder_name)
    new_problem_path = os.path.join(new_lesson_path, problem_folder_name)
    new_solution_path = os.path.join(new_problem_path, f"solution.{match.group(4)}")
    problem_md_path = os.path.join(new_problem_path, "problem.md")

    # Create directories if they don't exist
    os.makedirs(new_problem_path, exist_ok=True)

    # Move the solution file
    original_solution_path = os.path.join(repo_root, file_name)
    if os.path.exists(original_solution_path):
        shutil.move(original_solution_path, new_solution_path)
        print(f"Moved {file_name} to {new_solution_path}")
    else:
        print(f"Original solution file not found: {original_solution_path}")

    # Extract problem description from PDF and save as markdown
    pdf_file_name = f"{lesson_num}-{lesson_folder_name.split('-')[1]}.pdf"
    if lesson_folder_name == "07-StacksAndQueues": # Handle special filename
        pdf_file_name = "07-Stacks and Queues.pdf"
    pdf_path = os.path.join(lessons_dir, pdf_file_name)

    if os.path.exists(pdf_path) and not os.path.exists(problem_md_path):
        try:
            reader = PdfReader(pdf_path)
            text = ""
            # This is a placeholder. A more sophisticated approach would be needed
            # to extract only the relevant problem text from the PDF.
            # For now, we'll just extract text from the first few pages.
            for page_num in range(min(len(reader.pages), 3)): # Read first 3 pages as a heuristic
                text += reader.pages[page_num].extract_text() or ""
            
            # Simple heuristic to find problem text based on common patterns
            # This will need to be refined for each problem if it doesn't work well
            # For now, we'll just save the extracted text.
            with open(problem_md_path, "w", encoding="utf-8") as f:
                f.write(f"# Problem: {problem_slug.replace('-', ' ').title()}\n\n")
                f.write(text)
            print(f"Extracted text from {pdf_file_name} to {problem_md_path}")
        except Exception as e:
            print(f"Error processing PDF {pdf_file_name}: {e}")
    elif os.path.exists(problem_md_path):
        print(f"Problem description already exists for {problem_slug}")
    else:
        print(f"PDF file not found: {pdf_path}")

print("Processing complete.")
