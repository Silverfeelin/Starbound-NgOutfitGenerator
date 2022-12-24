export class CommandHelper {
  static generateCommand(descriptor: any): string {
    if (!descriptor.hasOwnProperty("name") || typeof descriptor.name !== "string") {
      descriptor.name = "perfectlygenericitem";
    }
    
    if (!descriptor.hasOwnProperty("count") || typeof descriptor.count !== "number") {
      descriptor.count = 1;
    }
    
    if (descriptor.hasOwnProperty("parameters")) {
      descriptor.parameters = CommandHelper.escapeObject(descriptor.parameters);
    }
  
    let cmd = `/spawnitem ${descriptor.name} ${descriptor.count}`;
    if (descriptor.hasOwnProperty("parameters")) {
      cmd += ` '${JSON.stringify(descriptor.parameters).replace(/'/g, "\\'")}'`;
    }
  
    return cmd;
  }
  
  static escapeObject(jsonObject: any): any {
    Object.keys(jsonObject).forEach((key) => {
      const value = jsonObject[key];
      if (typeof value === "string") {
        jsonObject[key] = value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
      } else if (typeof value === "object") {
        jsonObject[key] = CommandHelper.escapeObject(value);
      }
    });
    return jsonObject;
  }
}
