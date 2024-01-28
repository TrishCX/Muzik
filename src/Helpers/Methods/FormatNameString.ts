export function formatNameString(name: string) {
  if (name.length < 20) return name;
  const _name = name?.split(" ");
  const firstElement = _name?.slice(0, 2).join(" ");
  const nameArray = [firstElement, ..._name.slice(2)];
  return nameArray;
}
