
import { toast } from 'react-toastify';
import { PostLoginInstance, PreLoginInstance } from '../../utils';
import { getUserDetails, setCookie, setToken } from '../../utils/ManageToken';

export const getBoards = (data, ctx) => {
    return PostLoginInstance.post('feed/board/get-boards', data)
        .then(res => {
            if (!res.data.error) {
                const boards = res.data.data.boards
                 let selectedBoard = boards.length > 0 ? boards[0] : null;
                if (boards.length == 0) {
                    ctx.props.history.push("/workspace/onboarding");
                    console.log("no board found user send to onboard")
                }
                else {
                    ctx.setState({ boards, selectedBoard });
                    console.log("board found and updated", boards);
                }
               
               
            } else {
                toast.error(res.data.message || "Something went wrong");
            }
        })
        .catch((error) => {
            console.log(' error: ', error);
        });
}