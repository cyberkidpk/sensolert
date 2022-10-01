// import { ThemeType } from 'grommet/themes';
const customTheme = {
    global: {
        colors: {
            primary: '#22ABDC',
            secondary: '#1B8AB1',
            danger: '#BE0101',
            green: '#5FDA46',
            threshold: '#E2AC00',
        },
        backgrounds: {
            primary: '#22ABDC',
            secondary: '#1B8AB1',
            danger: '#BE0101',
            green: '#5FDA46',
            threshold: '#E2AC00',
            callToActGradi:
                'linear-gradient(180deg, rgba(121,9,32,1) 7%, rgba(172,21,2,1) 47%, rgba(255,20,0,1) 100%)',
        },
    },
    button: {
        border: {
            color: '#efefef',
        },
        extend: ``,
        // extend: `background: linear-gradient(180deg, rgba(172,27,2,0.5527253137583159) 11%, rgba(209,6,28,1) 50%, rgba(255,20,0,1) 100%);align-self: end;`,
    },
    formField: {
        label: {
            color: '#22ABDC',
            size: 'large',
            margin: 'xsmall',
            weight: 600,
        },
        border: {
            position: 'outer',
            size: 'all',
        },
        disabled: {
            background: {
                color: 'status-disabled',
            },
        },
        content: {
            pad: 'small',
        },
        error: {
            border: {
                position: 'outer',
            },
        },
        margin: 'none',
    },

    extend: (props: any) => {
        let extraStyles = '';
        if (props.button) {
            extraStyles = `text-transform: uppercase;`;
        }
        return `font-size: 12px; font-weight: bold; ${extraStyles}`;
    },
};

export default customTheme;
