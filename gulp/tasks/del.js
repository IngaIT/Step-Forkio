import { deleteAsync } from 'del';
export const del = () => {
    return deleteAsync(app.path.clean);
};
