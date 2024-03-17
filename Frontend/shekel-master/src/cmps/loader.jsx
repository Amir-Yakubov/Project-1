export function Loader() {
    const loader = 'Loader.svg'
    return <div className='frame'>
        <div className='loader-wrap'>
            <img className="loader" alt='Loader' src={require(`../assets/img/loader/${loader}`)}/>
        </div>
    </div>
}