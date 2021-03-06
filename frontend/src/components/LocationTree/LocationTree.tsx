import { ProgramNode } from '../../interfaces/program-node'

interface IProps {
  currentNode?: ProgramNode
  tree?: ProgramNode
}

export const LocationTree = ({ currentNode, tree }: IProps = {}) => {
  return (
    <ul>
      {/* 
        TODO: Display Program's Location Tree

      * Indent the location deeper the tree
      * Add an icon using React FontAwesomeIcon
      * program - faGlobe
      * region - faLayerGroup
      * chapter - faMapMarkerAlt
      * Display the name of the location
      * Highlight the current node
      * Display the location count on all nodes expect location nodes 
      */}
    </ul>
  )
}

export default LocationTree