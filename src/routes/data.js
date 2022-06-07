export let userData = {
    boards: [
        {
            name: 'Raspberry PI',
            width: 2,
            height: 20,
            type: 0,
            data: [
                {
                    label: '3v3 Power',
                    type: 'VCC',
                    pin: 1
                },
                {
                    label: 'GPIO 2 (I2C1) SDA',
                    type: 'GPIO',
                    pin: 3
                },
                {
                    label: 'GPIO 3 (I2C1) SCL',
                    type: 'GPIO',
                    pin: 5
                },
                {
                    label: 'GPIO 4 (GPCLK0)',
                    type: 'GPIO',
                    pin: 7
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 9
                },
                {
                    label: 'GPIO 17',
                    type: 'GPIO',
                    pin: 11
                },
                {
                    label: 'GPIO 27',
                    type: 'GPIO',
                    pin: 13
                },
                {
                    label: 'GPIO 22',
                    type: 'GPIO',
                    pin: 15
                },
                {
                    label: '3v3 Power',
                    type: 'VCC',
                    pin: 17
                },
                {
                    label: 'GPIO 10 (SPIO MOSI)',
                    type: 'GPIO',
                    pin: 19
                },
                {
                    label: 'GPIO 9 (SPIO MISO)',
                    type: 'GPIO',
                    pin: 21
                },
                {
                    label: 'GPIO 11 (SPIO SCLK)',
                    type: 'GPIO',
                    pin: 23
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 25
                },
                {
                    label: 'GPIO 0 (EEPROM SDA)',
                    type: 'GPIO',
                    pin: 27
                },
                {
                    label: 'GPIO 5',
                    type: 'GPIO',
                    pin: 29
                },
                {
                    label: 'GPIO 6',
                    type: 'GPIO',
                    pin: 31
                },
                {
                    label: 'GPIO 13 (PWM1)',
                    type: 'GPIO',
                    pin: 33
                },
                {
                    label: 'GPIO 19 (PCM FS)',
                    type: 'GPIO',
                    pin: 35
                },
                {
                    label: 'GPIO 26',
                    type: 'GPIO',
                    pin: 37
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 39
                },
                {
                    label: '5v Power',
                    type: 'VCC',
                    pin: 2
                },
                {
                    label: '5v Power',
                    type: 'VCC',
                    pin: 4
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 6
                },
                {
                    label: 'GPIO 14 (UART TX)',
                    type: 'GPIO',
                    pin: 8
                },
                {
                    label: 'GPIO 15 (UART RX)',
                    type: 'GPIO',
                    pin: 10
                },
                {
                    label: 'GPIO 18 (PCM CLK)',
                    type: 'GPIO',
                    pin: 12
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 14
                },
                {
                    label: 'GPIO 23',
                    type: 'GPIO',
                    pin: 16
                },
                {
                    label: 'GPIO 24',
                    type: 'GPIO',
                    pin: 18
                },
                {
                    label: 'Ground',
                    type: 'GPIO',
                    pin: 20
                },
                {
                    label: 'GPIO 25',
                    type: 'GPIO',
                    pin: 22
                },
                {
                    label: 'GPIO 8 (SPIO CE0)',
                    type: 'GPIO',
                    pin: 24
                },
                {
                    label: 'GPIO 7 (SPIO CE1)',
                    type: 'GPIO',
                    pin: 26
                },
                {
                    label: 'GPIO 1 (EEPROM SCL)',
                    type: 'GPIO',
                    pin: 28
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 30
                },
                {
                    label: 'GPIO 12 (PWM0)',
                    type: 'GPIO',
                    pin: 32
                },
                {
                    label: 'Ground',
                    type: 'GND',
                    pin: 34
                },
                {
                    label: 'GPIO 16',
                    type: 'GPIO',
                    pin: 36
                },
                {
                    label: 'GPIO 20 (PCM DIN)',
                    type: 'GPIO',
                    pin: 38
                },
                {
                    label: 'GPIO 21 (PCM DOUT)',
                    type: 'GPIO',
                    pin: 40
                }
            ]
        },
        {
            name: 'MCP3008',
            width: 2,
            height: 8,
            type: 1,
            data: [{
                label: 'CH0',
                type: 'CH',
                pin: 1
            },
            {
                label: 'CH1',
                type: 'CH',
                pin: 2
            },
            {
                label: 'CH2',
                type: 'CH',
                pin: 3
            },
            {
                label: 'CH3',
                type: 'CH',
                pin: 4
            },
            {
                label: 'CH4',
                type: 'CH',
                pin: 5
            },
            {
                label: 'CH5',
                type: 'CH',
                pin: 6
            },
            {
                label: 'CH6',
                type: 'CH',
                pin: 7
            },
            {
                label: 'CH7',
                type: 'CH',
                pin: 8
            },
            {
                label: 'VDD',
                type: 'VCC',
                pin: 16
            },
            {
                label: 'VREF',
                type: 'VCC',
                pin: 15
            },
            {
                label: 'AGND',
                type: 'GND',
                pin: 14
            },
            {
                label: 'CLK',
                type: 'CLK',
                pin: 13
            },
            {
                label: 'DOUT',
                type: 'SERIAL',
                pin: 12
            },
            {
                label: 'DIN',
                type: 'SERIAL',
                pin: 11
            },
            {
                label: 'CS/SHDN',
                type: 'GPIO',
                pin: 10
            },
            {
                label: 'DGND',
                type: 'GND',
                pin: 9
            }]
        }
    ],
    rules: {
        VCC: [
            "VCC"
        ],
        GPIO: [
            "GPIO",
            "SERIAL",
            "CLK"
        ],
        GND: [
            "GND",
            "CH"
        ],
        CH: [
            "GND",
            "CH"
        ],
        CLK: [
            "GPIO",
            "CLK"
        ],
        SERIAL: [
            "GPIO"
        ]
    }
};

