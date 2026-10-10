const withDarkMode = (Component:any) => {
    let name = 'ds';
    return (props:any) => (
        <Component style={{backgroundColor:'black',color:'white'}} {...props} name={name} />
    )
}

export default withDarkMode