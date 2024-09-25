interface PageProps{
    params:{
        url: string | string[] | undefined
    }
}

const Page = ({params}: PageProps) => {


    return <p>access to the external url</p>
}

export default Page