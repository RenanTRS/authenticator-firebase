import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        google:{
            colors:{
                primary: string,
                secundary: string
            }
        },
        twitter:{
            colors:{
                primary: string,
                secundary: string
            }
        },
        github:{
            colors:{
                primary: string,
                secundary: string
            }
        }
    }
}