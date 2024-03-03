function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  let time = 0;
  for (let i = 0; i < n; i++) {
    time = Math.max(time, bubbleUp(i));
  }
  function bubbleUp(employeeID: number): number {
    const managerID = manager[employeeID];
    if (managerID !== -1) {
      manager[employeeID] = -1;
      informTime[employeeID] += bubbleUp(managerID);
    }
    return informTime[employeeID];
  }

  return time;
}
