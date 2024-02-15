import {env} from '$env/dynamic/private'
export async function load() {
    return {
        word: env.SECRET_TEST_WORD
    };
}