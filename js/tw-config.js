
tailwind.config = {
    theme: {
        screens: {
            xs: "450px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            // "3xl": "1780px",
            // "4xl": "2160px", 
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                "2xl": "0px",
              },
        },
        fontFamily: {
            lora:['Lora', 'serif'],
        },
        fontSize:{
            xs:'13px',
            sm:'14px',
            base:'19px',
            lg:'20px',
            xl:'27px',
            '2xl':'29px',
            '3xl':'32px',
            '4xl':'40px',
            '5xl':'50px',
            '6xl':'64px',
        },
        extend: {
        colors: {
            brand: '#bd291d',
            primary: '#12336b',
            secondary: '#e2e5ea',
            tertiary: '#E8E8E8',
        }
        }
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen xs': {
                        maxWidth: '400px',
                    },
                    '@screen sm': {
                        maxWidth: '580px',
                    },
                    '@screen md': {
                        maxWidth: '700px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1280px',
                    },
                }
            })
        }
    ]
}