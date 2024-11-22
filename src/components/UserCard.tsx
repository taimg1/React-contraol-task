import { FC } from "react";
import { User } from "../types/user";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface UserCardProps {
    user :User,
    deleteUser: (id: number) => void;
 }

export const UserCard : FC<UserCardProps> = ({user, deleteUser}) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
                <Card.Title>
                    {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Text>Age: {user.age}</Card.Text>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};