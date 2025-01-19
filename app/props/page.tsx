'use client';

interface HeaderProps {
    title: string;
    name: string;
}

export default function Header({ title, name }: HeaderProps) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <hr />
        </>
    );
}


