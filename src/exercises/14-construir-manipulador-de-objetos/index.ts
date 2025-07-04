export class ObjectManipulator {
  constructor(protected obj: { [x: string]: any; x?: boolean; y?: string }) {}

  public set(key: string, value: string | number | boolean) {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key: string) {
    return this.obj[key];
  }

  public delete(key: string) {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}
