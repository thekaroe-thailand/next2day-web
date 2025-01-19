import ServerComponent from "../server-components/page";
import ClientComponent from "../client-components/page";
import Header from "../props/page";

export default function Page() {
    return (
        <div>
            <Header title="dev" name="tavon" />
            <Header title="admin" name="mali" />

            <div>Server Component</div>
            <ServerComponent />

            <div>Client Component</div>
            <ClientComponent />
        </div>
    );
}