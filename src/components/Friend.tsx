import { useNavigate } from 'react-router-dom';

interface FriendProps {
    picture: string,
    pos: number,
    id: string
}

const Friend = ({ picture, pos, id }: FriendProps) => {
    const navigate = useNavigate();
    let styles = 'border border-base-color cursor-pointer';
    if (pos === 7) {
        styles += ' rounded-bl-3xl';
    }
    if (pos === 9) {
        styles += ' rounded-br-3xl';
    }

    const handleClick = () => {
        navigate(`/about_me/${id}`);
    };

    return (
        <img 
            className={styles} 
            src={picture} 
            alt="Friend" 
            onClick={handleClick}
        />
    );
};

export default Friend;