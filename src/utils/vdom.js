export default function getFirstComponentChild(children) {
  return children.filter(child => child && child.tag)[0];
}
