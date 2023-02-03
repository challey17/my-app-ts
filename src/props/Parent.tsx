import {Child} from './Child'

const Parent = () => {
    const handleClick = () => {
        console.log("clicked")
         return 'a string'
    }
    
    return <Child color="red" onClick={handleClick}>
        askdfj
        </Child>
}

export default Parent