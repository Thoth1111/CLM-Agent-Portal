export const validAgentId = (agent_id) => {
    if (agent_id.length < 5) {        
        console.log('Agent ID must be at least 5 characters long');
        return false;
    }
    return true;
}

export const validPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (password.length === 0) {
        return false;
    } else if (!passwordRegex.test(password)) {
        return false;
    }
    return true;
}