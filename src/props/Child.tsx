interface ChildProps {
    color: string;
    onClick: () => string;
    children?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click</button>
        </div>
}

// ChildAsFC: React.FC<ChildProps>
// Child will be a React function component

// Child might have properties spcecific to a react FC like propTypes and contextTypes

// Child will recieve props of type ChildProps

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click</button>
        </div>
}

