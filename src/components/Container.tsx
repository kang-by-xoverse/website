type args = {
    children: React.ReactNode
}

const Container = ({children}: args) => {
    return (
        <div className="bg-cover bg-center h-screen">
            <div className="mx-auto w-3/4">
                {children}
            </div>
        </div>
    )
}

export default Container