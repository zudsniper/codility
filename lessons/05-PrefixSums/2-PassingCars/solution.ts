function solution(A: number[]): number {
    let passingCars = 0;
    let carsGoingEast = 0;
    const MAX_PASSING_CARS = 1000000000;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            // Car going east
            carsGoingEast++;
        } else {
            // Car going west
            passingCars += carsGoingEast;
        }

        if (passingCars > MAX_PASSING_CARS) {
            return -1;
        }
    }

    return passingCars;
}

