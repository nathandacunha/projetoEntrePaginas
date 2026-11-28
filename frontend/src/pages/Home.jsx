import LogoutButton from "../components/ButtonLogout";
function Home()
{
    return (
        <main className="App-home">
            <h2>Bem-vindo(a) à sua biblioteca!</h2>
            <LogoutButton />
        </main>
    );
}

export default Home;