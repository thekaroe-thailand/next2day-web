export default function ServerComponent() {
    const items = ['java', 'php', 'c++'];

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}