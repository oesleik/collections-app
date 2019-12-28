export default function objectPick (...props) {
  return obj => props.reduce((finalObj, prop) => {
    finalObj[prop] = obj[prop]
    return finalObj
  }, {})
}
