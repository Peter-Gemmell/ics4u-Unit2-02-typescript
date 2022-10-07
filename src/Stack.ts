/**
 * Second Class
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

class Stack {
  private readonly stack: number[] = []

  public Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  public getStack(): any {
    return this.stack
  }

  public popNumber(): any {
    return this.stack.pop()
  }
}
export = Stack
