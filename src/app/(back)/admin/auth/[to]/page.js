export default function Auth({ params }) {
    return <h1>Şu an buradasın: {JSON.stringify(params.to, 2, null)}</h1>
}