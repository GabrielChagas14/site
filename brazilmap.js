class BrazilMapComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render();
    }
    data() {
        return {
            states: [
                { id: "RS", d: "M465.264 771.556L475.035 773.87L482.917 771.556L490.482 773.87H500.257L507.821 779.232H516.333L530.837 789.639L537.772 800.997L558.894 802.257L559.577 806.149L553.692 810.09L553.795 815.716L550.802 819.397L559.734 822.235L551.325 834.223L546.596 849.366L535.879 864.715L521.272 879.648L510.764 883.642L499.413 893.736L495.84 906.355L488.695 917.289L476.085 927.382H470.833L472.512 919.393L470.833 912.874L474.825 908.879L482.6 904.25L479.027 900.255L473.356 899.415L469.298 896.261L466.417 887.007L450.447 879.228L448.134 873.338L440.989 872.078L437.417 868.289L433.21 868.499L430.268 863.455L424.386 857.566L417.871 863.875L413.245 863.034L415.138 856.515L396.852 840.112L390.546 839.272L385.924 842.427L381.652 844.947L378.849 843.127L384.385 838.848L384.595 835.693L386.204 833.733L389.637 833.313L396.992 826.514L401.478 818.66L405.89 817.89L408.516 811.091L415.241 803.732L419.34 801.314L422.6 802.257L423.757 799.42L421.234 796.792L431.844 789.536L434.684 790.376L439.833 786.801L441.092 783.124L449.501 779.755L456.016 778.812L457.066 775.657L460.848 775.237L461.795 772.083L465.264 771.556Z" },
                { id: "PR", d: "M453.46 698.024L458.432 695.43L461.585 683.021L466.417 680.917L469.298 671.247L481.34 664.094L489.959 662.624L501.516 664.518L503.829 661.573L516.86 665.568L522.535 664.728L532.199 667.458L534.722 671.457L554.058 671.247L560.993 676.712L562.676 693.535L570.661 704.893L568.558 712.463H585.165L587.054 715.617L584.741 720.666H594.199L598.052 726.761L591.186 732.51L585.305 742.604L570.241 743.799L564.566 749.054H560.993L556.161 744.429L545.863 746.319L540.608 744.009L534.722 749.054H528.417L522.745 752.628L524.424 757.887L519.383 759.988L517.909 757.047L508.451 757.887L502.989 754.523L488.695 751.998L481.76 753.258L476.508 749.054L469.886 750.104L466.067 743.024L463.124 734.055L458.922 731.25L449.953 734.895L446.875 730.41L451.637 723.961L450.797 716.528L454.16 705.734L453.46 698.024Z" },
                { id: "SC", d: "M465.264 771.556L468.837 765.246L467.26 760.832L469.886 750.104L476.508 749.053L481.76 753.258L488.695 751.998L502.989 754.523L508.451 757.887L517.909 757.047L519.383 759.987L524.424 757.887L522.745 752.628L528.417 749.053H534.722L540.608 744.009L545.863 746.319L556.161 744.429L560.993 749.053H564.566L570.241 743.799L585.305 742.604L584.741 747.233L587.544 748.493L587.684 750.458L583.482 757.747L583.062 761.252L584.741 763.212L583.901 767.981L585.165 775.34L582.432 778.915L582.012 783.964L585.375 788.589L580.959 804.362L570.241 811.091L559.734 822.235L550.802 819.397L553.795 815.716L553.692 810.09L559.577 806.149L558.894 802.257L537.772 800.997L530.837 789.639L516.333 779.232H507.821L500.256 773.87H490.482L482.917 771.556L475.035 773.87L465.264 771.556Z" },
                { id: "SP", d: "M481.34 664.094V660.729L495.84 654.21L504.879 642.646V638.651L507.401 636.757L510.764 631.922L509.924 627.713L516.65 614.885L522.461 609.84H527.997L530.52 602.69L541.867 595.751L545.654 598.906L550.066 597.641L553.848 599.956L564.146 598.906L566.459 601.426H570.241L568.982 604.371L570.241 608.58L573.604 604.581L576.337 604.791V610.89L579.07 611.52L581.379 604.791L593.919 603.251L596.442 604.791L601.064 604.161V601.006L610.802 600.306L616.128 605.985L615.148 611.1L618.651 612.994L619.91 616.359L616.618 620.774L622.084 635.146L627.685 633.182L634.061 637.877L629.998 642.506L630.838 650.215L628.039 654.984L636.304 662.413V670.123H645.412L651.857 667.738L649.894 664.374L652.417 661.573L658.722 664.094L667.267 659.749L673.432 657.929L675.675 662.974L679.737 663.954L682.96 661.573L686.323 663.114L687.446 665.918L683.52 669.633L675.465 672.297L671.683 678.116L673.082 680.287L671.473 681.691L667.481 680.637L662.295 685.126L657.776 687.016L658.302 690.591L656.199 692.065L651.05 690.381L644.218 689.858L640.543 692.592L639.493 696.797L637.073 696.27L636.234 694.589L622.783 702.262L620.577 706.784L600.854 719.192L600.994 723.537L598.052 726.761L594.199 720.666H584.741L587.054 715.617L585.165 712.463H568.558L570.661 704.893L562.676 693.535L560.993 676.712L554.058 671.247L534.722 671.457L532.199 667.458L522.535 664.728L516.86 665.568L503.829 661.573L501.516 664.518L489.959 662.623L481.34 664.094Z" },
                { id: "RJ", d: "M673.432 657.929L694.591 650.075L709.301 648.535L710.844 652.18L730.88 642.086L728.077 638.301L732.419 632.692L734.103 623.158L739.005 619.514L743.631 620.354L744.47 628.203L753.299 630.868L760.127 630.975L760.864 634.129L758.448 636.44L760.234 641.172L759.917 648.115L755.925 652.423L748.78 653.37L737.428 662.516L736.696 665.988L739.322 667.458L736.589 670.823L724.085 669.88L711.894 672.19L704.539 670.823L703.699 673.035H700.967L696.34 669.843L687.022 673.035L683.52 669.633L687.446 665.918L686.323 663.114L682.96 661.573L679.737 663.954L675.675 662.974L673.432 657.929Z" },
                { id: "ES", d: "M739.005 619.514L741.845 612.887L740.425 609.103L741.845 606.055H750.986L752.772 600.059L755.925 598.272V594.487L760.864 589.125L762.123 582.503L755.818 574.299L756.451 572.302L760.864 572.722L762.123 569.885L759.497 568.937L759.814 564.205H756.344L757.867 557.896L761.283 556.636L765.646 557.793L766.589 556.373L764.383 553.955L765.486 552.481L768.116 553.325L770.425 551.484L776.993 552.378L789.97 560.631L788.184 570.832L790.6 583.973L787.661 593.017L782.508 595.117L778.203 600.376L779.146 606.578L775.573 614.152L769.902 621.301L766.329 621.828L765.276 626.243L760.127 630.975L753.299 630.868L744.47 628.203L743.631 620.354L739.005 619.514Z" },
                { id: "MG", d: "M776.993 552.378L779.36 548.853L770.112 539.039L771.091 527.545H776.977L778.656 525.58L776.137 523.62L777.397 519.695L785.241 513.106L785.945 507.357L775.014 501.468L761.143 497.963L757.081 500.488L752.455 500.068L753.159 494.039L742.787 484.785L736.626 486.749L733.263 483.665L730.18 485.625L714.067 474.131H708.741L702.576 477.916L693.468 474.131L695.571 466.557L685.903 464L674.556 468.522L666.567 475.951L662.645 476.091L651.018 485.345L643.728 488.29L641.21 486.465L645.552 482.82L644.712 479.036L639.106 480.3L638.267 476.651L634.061 474.971L632.241 477.636L633.641 483.525L632.241 484.505L625.236 482.12L623.413 486.609L625.376 489.55L623.413 493.054V496.139L626.776 497.403V503.432L614.869 506.797V511.982L611.362 516.471V518.711L615.848 521.516L618.264 530.349L609.753 538.026L611.119 541.81L614.585 542.02L615.848 545.068L612.696 549.697L614.585 554.849L601.031 564.836L591.993 561.788H577.073L572.237 563.575L566.879 569.147L564.146 565.89L558.61 569.147L552.239 567.92L550.975 570.235L546.143 569.675L541.517 575.564L541.097 579.628L536.755 580.749L530.73 589.512L528.767 594.347L530.52 602.691L541.867 595.751L545.654 598.906L550.066 597.642L553.848 599.956L564.146 598.906L566.459 601.426H570.241L568.982 604.371L570.241 608.58L573.604 604.581L576.337 604.791V610.89L579.07 611.52L581.379 604.791L593.919 603.251L596.442 604.791L601.064 604.161V601.006L610.802 600.306L616.128 605.985L615.148 611.1L618.651 612.994L619.91 616.359L616.618 620.774L622.084 635.147L627.685 633.182L634.061 637.877L629.998 642.506L630.838 650.215L628.039 654.984L636.304 662.414V670.123H645.412L651.857 667.739L649.894 664.374L652.417 661.573L658.722 664.094L667.267 659.749L673.432 657.929L694.591 650.075L709.301 648.535L710.844 652.18L730.88 642.086L728.077 638.301L732.419 632.692L734.103 623.158L739.005 619.514L741.845 612.887L740.425 609.103L741.845 606.055H750.986L752.772 600.059L755.925 598.272V594.487L760.864 589.125L762.123 582.503L755.818 574.299L756.451 572.302L760.864 572.722L762.123 569.885L759.497 568.937L759.814 564.205H756.344L757.867 557.896L761.283 556.636L765.646 557.793L766.589 556.373L764.383 553.955L765.486 552.481L768.116 553.325L770.425 551.484L776.993 552.378Z" },
                { id: "MS", d: "M530.73 589.512L525.161 582.396H515.386L499.31 574.196L495.527 569.465L487.646 571.042L484.493 567.064L489.852 563.155L488.275 560.211L481.97 561.261L480.394 555.162L475.035 552.851L468.837 554.429L461.165 551.064L463.898 546.122L467.573 545.385L469.298 535.711L465.577 534.974L458.432 544.858H453.39L447.398 540.756L442.566 545.385L430.901 544.018L421.933 536.939L412.825 533.854L404.141 537.079L396.992 537.359L390.126 548.013L383.961 548.993L375.697 539.743L373.104 541.073L375.417 549.277L379.829 559.371L374.787 575.984L366.169 595.331L372.264 601.216L366.169 604.581V607.525L371.844 616.359L373.523 633.182L369.391 648.395L370.791 650.915L376.816 649.795L378.849 653.02L396.152 654.42L404.84 649.795L411.146 654.56L418.99 655.124L421.933 657.929L422.073 661.293L424.316 663.674L423.053 669.423L425.576 676.152L425.996 684.986L428.518 689.751L427.539 695.22L435.384 695.5L445.891 692.275L453.46 698.024L458.432 695.43L461.585 683.021L466.417 680.917L469.298 671.247L481.34 664.094V660.729L495.84 654.21L504.879 642.646V638.651L507.401 636.757L510.764 631.922L509.924 627.713L516.65 614.885L522.461 609.84H527.997L530.52 602.691L528.767 594.347L530.73 589.512Z" },
                { id: "GO", d: "M480.394 555.162L482.6 552.007L477.768 543.388L483.444 525.09L494.371 517.731L490.169 513.526L500.257 503.432H507.821L513.917 495.439L514.756 485.135L520.012 481.14L522.955 483.665L528.767 481.14V468.312L534.092 459.898L532.833 452.329L539.138 440.555L537.875 435.296L541.237 430.671L544.18 421.837H550.905L546.913 431.301L554.688 433.822L567.089 442.025V435.506L571.501 429.827L576.547 433.611L579.07 429.407L586.424 435.506V442.655L593.779 437.4L595.253 443.285L598.615 440.975L601.978 441.605L606.18 447.284L608.283 444.129L606.18 437.82L608.283 436.136L613.745 441.185L627.615 434.456H638.547V443.285L640.646 448.334L638.757 460.533L647.161 466.842L644.712 479.036L639.106 480.3L638.267 476.651L634.061 474.971L632.241 477.636L633.641 483.525L632.241 484.505L625.236 482.12L623.413 486.609L625.376 489.55L623.413 493.054V496.139L626.776 497.403V503.432L614.869 506.797V511.982L611.362 516.471V518.711L615.848 521.516L618.264 530.349L609.753 538.026L611.119 541.81L614.585 542.021L615.848 545.068L612.696 549.697L614.585 554.849L601.031 564.836L591.993 561.788H577.073L572.237 563.575L566.879 569.147L564.146 565.89L558.61 569.147L552.239 567.92L550.975 570.235L546.143 569.675L541.517 575.564L541.097 579.628L536.755 580.749L530.73 589.512L525.161 582.396H515.386L499.31 574.196L495.527 569.465L487.646 571.042L484.493 567.064L489.852 563.155L488.275 560.211L481.97 561.261L480.394 555.162Z" },
                { id: "MT", d: "M541.237 430.671L537.035 424.885L539.138 418.576L538.295 402.7L535.352 399.755L535.879 393.553L538.295 391.136L539.348 378.517L547.753 359.8L398.325 348.866L395.802 344.867H390.756V340.872L386.554 337.088H382.352V333.933H378.359L376.256 325.524V319.845L372.054 312.905L369.111 302.811L364.699 299.867L362.806 304.072V307.646L359.233 312.275L362.386 318.16L361.337 325.099L359.233 326.994V335.408L285.676 334.563L288.195 337.298L287.565 345.291L284.413 345.921V349.076L288.195 353.281L286.306 357.696L287.355 361.904L285.252 365.269L285.466 369.264L288.405 372.628L286.516 386.927L311.733 386.507L313.417 389.661L322.455 390.081L324.134 395.971L319.372 401.93L319.932 406.975L323.155 409.219L324.414 417.493L327.916 419.453L324.834 422.537L320.632 424.922L320.352 433.611L315.413 436.766L313.524 445.39L305.852 450.439L313.627 458.996L309.844 463.238L315.52 473.571L316.779 484.295L309.844 485.555L316.989 493.759L318.672 512.262L356.71 514.576L360.283 512.052L361.756 517.311L356.71 525.93L360.283 536.659L366.169 542.758L373.104 541.073L375.697 539.743L383.961 548.993L390.127 548.013L396.992 537.359L404.141 537.079L412.825 533.854L421.933 536.939L430.902 544.018L442.566 545.385L447.398 540.756L453.39 544.858H458.432L465.577 534.974L469.298 535.711L467.573 545.385L463.898 546.122L461.165 551.064L468.837 554.429L475.035 552.851L480.394 555.162L482.6 552.007L477.768 543.388L483.444 525.09L494.371 517.731L490.169 513.526L500.257 503.432H507.821L513.917 495.439L514.756 485.135L520.012 481.14L522.955 483.665L528.767 481.14V468.312L534.092 459.898L532.833 452.329L539.138 440.555L537.875 435.296L541.237 430.671Z" },
                { id: "DF", d: "M285.676 334.563L280.84 332.463L277.897 336.248L269.283 330.568L267.81 323.629H262.134L261.084 318.37L256.043 315.216H239.44L235.233 323.629H231.451V329.518L226.829 333.093V338.352L210.016 339.822V344.867L203.92 350.546L201.607 345.921L197.405 346.551L196.352 350.546L193.833 349.496L190.26 350.546L189.416 352.861L184.584 349.286L174.917 348.866L172.603 355.175L165.039 358.33L170.295 361.27L178.069 359.17L186.264 358.33L193.833 360.22L195.722 355.595L197.615 355.385L200.138 358.96L201.188 367.789L197.615 373.258V379.147L201.397 386.087L199.294 390.711L201.397 399.545L205.18 403.75L207.913 412.374L219.26 416.998V422.047L229.562 424.572L233.554 420.363L238.596 421.417L245.531 428.356L250.157 425.202L254.569 433.191L266.34 438.66L273.275 438.87L278.737 446.65L296.814 447.494L305.852 450.439L313.524 445.39L315.413 436.766L320.352 433.611L320.632 424.922L324.834 422.537L327.917 419.453L324.414 417.493L323.155 409.219L319.932 406.974L319.372 401.93L324.134 395.971L322.455 390.081L313.417 389.661L311.733 386.507L286.516 386.927L288.405 372.628L285.466 369.264L285.252 365.269L287.355 361.904L286.306 357.695L288.195 353.281L284.413 349.076V345.921L287.565 345.291L288.195 337.298L285.676 334.563Z" },
                { id: "AC", d: "M165.039 358.33L123.424 341.293L83.7026 318.585L29.6912 307.016L4.46974 294.748L6.01316 299.727L0.617371 301.407V305.332L4.53971 309.541L7.51953 311.221L5.41637 313.853L8.88597 318.057L10.0384 324.259L15.714 331.306L20.1262 333.093L23.7028 338.352L23.5958 342.87L17.5003 349.706L30.004 350.023L38.2027 351.704L41.7752 358.96L41.1455 363.165L62.4775 362.955L78.134 350.233L80.5499 351.176L80.1301 356.785L77.5372 359.1V386.927L80.2001 385.877L83.3528 388.961L88.1888 388.611L95.0539 385.177L99.8159 386.717L112.217 386.017L120.061 387.207L122.235 390.922L131.483 387.067L136.455 378.938L143.809 380.198L146.332 377.043L153.477 371.368L159.783 369.894L170.294 361.27L165.039 358.33Z" },
                { id: "AM", d: "M364.699 299.867L363.786 294.398L358.184 288.649L356.92 283.044L362.806 278.555L406.627 179.577L411.669 176.422L412.755 173.408L409.392 172.147L404.421 177.056L398.815 178.246L395.942 176.772L395.872 172.147L388.237 165.698L382.002 166.538L369.811 158.689L370.441 153.57L368.272 150.345L363.366 154.274L358.534 149.925L358.184 146.071L351.319 140.461V135.697L347.672 132.612V119.574H321.611L312.787 137.801L315.59 142.286L310.544 143.97V146.631H305.078V142.986L296.954 137.237L288.829 140.886L286.026 146.071L285.042 154.484L289.389 160.933L286.586 163.594L282.803 158.409L278.037 159.249L274.815 151.4L264.307 144.25V140.886L269.633 142.006L272.856 136.257L265.711 121.538L265.99 116.209L263.328 110.88L266.41 103.311L262.134 91.9896L257.512 87.9949L260.245 84.9473L260.772 78.3211L255.726 76.2166L252.993 77.7939L250.157 73.6963L245.008 73.9063L239.226 75.5865L235.34 78.4281L230.401 77.5839L228.298 79.3712L227.985 86.6276L222.73 91.1494L219.997 90.0993L213.099 96.3714L210.716 95.1812L202.937 98.6859L202.657 103.591L199.574 103.311L197.755 105.135L197.615 108.64L194.742 110.46L193.623 107.94L195.302 105.135L194.182 102.12L190.61 101.35L181.922 107.585L176.736 107.73L163.919 96.3014L158.663 97.5616L159.013 86.7676L158.453 82.5629L155.651 81.7928L153.831 80.3884L154.041 74.2893L151.588 71.7689L148.855 74.0093L146.542 77.0238H143.32L139.047 81.6527L133.722 78.5682L132.182 81.0185L132.812 84.0331L106.401 84.7373L103.458 82.9829L95.1239 85.0174L95.3338 99.1759L107.451 99.736L110.883 103.731L111.447 110.707L106.928 111.337L103.248 108.603L98.7293 111.127L91.0575 112.177L90.5348 129.527L94.3172 134.156L101.149 138.254L101.252 144.04L104.722 149.295L105.664 157.289L92.321 226.475L86.1186 227.736L83.9125 224.581L76.9774 224.371L72.5159 226.101L69.6225 229.523L60.9012 230.363L55.7523 232.78L48.5003 232.888L37.5729 239.407L26.2216 247.503L23.4887 254.863V260.542L18.6568 265.797L16.7306 270.916L19.9533 278.835L17.8501 282.13L13.5779 282.694L6.15308 288.299L4.46973 294.748L29.6912 307.016L83.7026 318.584L123.424 341.292L165.039 358.33L172.603 355.175L174.917 348.866L184.584 349.286L189.416 352.861L190.26 350.546L193.833 349.496L196.352 350.546L197.405 346.551L201.607 345.921L203.92 350.546L210.016 344.867V339.822L226.829 338.352V333.093L231.451 329.518V323.629H235.233L239.44 315.216H256.043L261.084 318.37L262.134 323.629H267.81L269.283 330.568L277.897 336.248L280.84 332.463L285.676 334.563L359.233 335.407V326.994L361.337 325.099L362.386 318.16L359.233 312.275L362.806 307.646V304.072L364.699 299.867Z" },
                { id: "RR", d: "M347.672 119.574L348.096 95.6713L338.951 91.8866L331.913 84.9474L328.34 79.8984L328.76 72.642L322.768 63.4954V54.6617L326.34 46.1451L326.517 40.0131L331.419 35.8783L332.123 29.6392L327.916 24.6602L329.88 21.3656L327.077 19.1253L319.022 17.7909L322.385 10.2916L322.245 4.75253L317.969 0.617798L312.577 2.37218L306.272 1.52793L309.074 8.39719L300.386 14.0063L300.176 18.281L292.961 17.7909L287.355 20.6655L286.796 24.1701L281.05 24.4872L278.737 27.0117L275.798 26.0645L272.958 28.5849L266.863 25.6445L262.344 29.5321L258.459 30.1622L256.672 36.8955L254.256 39.313H252.363L251.207 35.7383L247.951 32.1637L244.481 31.6365L241.958 33.5268L238.806 31.6365L229.982 32.5837L225.985 27.3247L216.214 27.4318L213.798 24.1701L211.695 23.643L211.065 25.4344L218.63 35.1041L222.1 36.2613L225.882 40.9932L224.306 45.095L225.252 51.7213L228.405 56.029L230.191 60.1307L229.035 66.3328L235.863 69.1744L243.745 67.5972L245.008 73.9063L250.157 73.6963L252.993 77.794L255.726 76.2167L260.772 78.3211L260.245 84.9474L257.512 87.9949L262.134 91.9896L266.41 103.311L263.328 110.88L265.99 116.209L265.711 121.538L272.856 136.257L269.633 142.006L264.307 140.886V144.25L274.815 151.4L278.037 159.249L282.803 158.409L286.586 163.594L289.389 160.933L285.042 154.484L286.026 146.071L288.829 140.886L296.953 137.237L305.078 142.986V146.631H310.544V143.97L315.59 142.286L312.787 137.801L321.611 119.574H347.672Z" },
                { id: "AP", d: "M440.36 67.7001L443.722 83.053L454.23 84.1032L459.901 91.4666L470.413 92.9368L473.776 96.5115V103.031L480.921 109.34L480.081 116.279L485.123 128.477L491.008 132.892V138.361L495.211 139.411L493.531 145.931H497.314V150.77L504.669 154.134L511.604 153.29L514.337 149.925V144.25L521.062 135.837L523.165 129.528L530.1 124.058L536.196 123.008L541.867 116.909L543.34 110.917L550.485 108.5L555.107 101.35L556.161 94.6212L554.058 83.8931L546.283 82.6329V77.3739L541.237 72.5391L535.986 74.6394L527.367 48.9868V32.3737L520.152 19.7554L516.09 20.8755L514.966 28.8691L511.884 30.4093L511.184 33.4939L507.821 35.8784L499.977 48.6367L494.581 60.6579L495.108 65.0727L485.44 73.2762H478.085L475.352 69.4875L470.833 72.0119L467.05 69.8046H463.478L459.588 72.9591L452.127 73.2762L445.821 70.3317L444.035 67.2801L440.36 67.7001Z" },
                { id: "PA", d: "M547.753 359.8L551.745 346.551L558.05 336.458H563.306L570.871 324.679L573.604 311.431L567.089 307.226L566.879 303.021L571.711 297.972L571.291 290.613L575.073 286.408H581.802L585.585 277.155H590.417L595.673 259.281L590.627 254.022L585.375 255.493L581.379 252.338L589.367 247.713L603.028 234.045H608.283L620.47 218.272L621.734 209.862L629.718 200.609V190.935L635.184 185.466V180.421L639.806 175.792L642.119 164.648L641.699 154.134L622.154 144.46L603.028 139.831L599.245 142.986L588.314 137.521L590.207 133.522L587.684 130.368L579.279 131.632L565.409 124.273L560.993 116.699L550.486 118.173L552.589 112.494L550.486 108.5L543.341 110.917L541.867 116.909L536.196 123.008L530.1 124.058L523.165 129.528L521.062 135.837L514.337 144.25V149.925L511.604 153.29L504.669 154.134L497.314 150.769V145.931H493.531L495.211 139.411L491.008 138.361V132.892L485.123 128.477L480.081 116.279L480.921 109.34L473.776 103.031V96.5114L470.413 92.9368L459.901 91.4666L454.23 84.1031L443.722 83.053L440.36 67.7001L437.52 64.6526L430.165 65.4927L428.272 67.5971L419.97 67.8072L415.138 65.7027L411.668 71.4889L416.714 76.7438L415.768 81.2656L411.985 82.1058L403.894 79.1612L396.852 80.6355L387.92 77.901L382.669 79.3712L378.989 85.1574L374.26 83.6831L368.272 85.8904L367.325 89.9922L361.23 87.7848L357.55 90.5194L357.027 95.2512L348.096 95.6713L347.672 119.574V132.612L351.319 135.697V140.461L358.184 146.071L358.534 149.925L363.366 154.274L368.272 150.345L370.441 153.57L369.811 158.689L382.002 166.538L388.237 165.698L395.872 172.147L395.942 176.772L398.815 178.247L404.421 177.056L409.392 172.147L412.755 173.408L411.668 176.422L406.627 179.577L362.806 278.555L356.92 283.044L358.184 288.649L363.786 294.398L364.699 299.867L369.111 302.811L372.054 312.905L376.256 319.845V325.524L378.359 333.933H382.352V337.088H386.554L390.756 340.872V344.867H395.802L398.325 348.866L547.753 359.8Z" },
                { id: "TO", d: "M589.367 247.713L595.043 251.498L598.615 249.608H602.398L603.657 253.392L610.173 255.913V262.432L612.695 265.797L613.745 275.47L609.963 292.083L605.341 295.662L606.39 298.817H610.173L612.905 301.547L611.436 304.912L622.154 317.53L626.566 313.325H632.031L634.764 316.48L633.711 322.999L626.566 324.469L624.043 335.198L620.68 340.452L626.985 344.237L627.825 349.916H630.978L632.871 352.861L629.928 356.645L634.764 359.8L635.814 367.789H647.161L651.787 371.154L641.28 379.148L634.554 391.136L630.558 393.446L633.291 399.335L638.547 401.02L636.024 416.999L639.806 421.837L638.547 434.456H627.615L613.745 441.185L608.283 436.136L606.18 437.82L608.283 444.13L606.18 447.284L601.978 441.605L598.615 440.975L595.253 443.285L593.779 437.4L586.424 442.655V435.506L579.07 429.407L576.547 433.612L571.501 429.827L567.089 435.506V442.025L554.688 433.822L546.913 431.301L550.905 421.837H544.18L541.237 430.671L537.035 424.885L539.138 418.576L538.295 402.7L535.352 399.755L535.879 393.553L538.295 391.136L539.348 378.517L547.753 359.8L551.745 346.552L558.05 336.458H563.306L570.871 324.68L573.604 311.431L567.089 307.226L566.879 303.022L571.711 297.973L571.291 290.613L575.073 286.409H581.802L585.585 277.155H590.417L595.673 259.282L590.627 254.023L585.375 255.493L581.379 252.338L589.367 247.713Z" },
                { id: "MA", d: "M647.161 367.789L650.314 349.599L644.642 336.668L650.314 330.358L655.989 307.333L677.112 302.914L684.364 295.345L687.829 286.828L697.917 284.304L703.592 289.036L715.574 285.881L718.092 273.893L711.787 269.165L711.474 259.067L719.356 251.815V241.721L715.257 237.936L717.78 231.627L715.257 224.688L721.879 217.745V213.33L725.661 207.338L734.173 208.915L746.15 194.929L741.528 190.515L732.699 188.62L727.238 190.515L706.008 180.631L702.856 182.101L698.654 178.526L691.928 186.94L690.035 183.361L683.944 185.466L680.367 182.941L681.631 174.532L673.642 160.653L668.81 157.289L660.192 165.698L657.673 157.499L651.157 158.759L641.699 154.134L642.119 164.648L639.806 175.792L635.184 180.421V185.466L629.718 190.935V200.609L621.734 209.862L620.47 218.272L608.283 234.045H603.028L589.367 247.713L595.043 251.498L598.615 249.608H602.398L603.657 253.392L610.173 255.913V262.432L612.696 265.796L613.745 275.47L609.963 292.083L605.341 295.662L606.39 298.817H610.173L612.905 301.547L611.436 304.912L622.154 317.53L626.566 313.325H632.031L634.764 316.48L633.711 322.999L626.566 324.469L624.043 335.197L620.68 340.452L626.985 344.237L627.825 349.916H630.978L632.871 352.861L629.928 356.645L634.764 359.8L635.814 367.789H647.161Z" },
                { id: "PI", d: "M651.787 371.154L652.944 367.789L656.463 368.263L658.302 372.785L657.566 377.937L662.031 383.142L669.596 385.77L676.795 378.727L682.153 376.779L687.829 379.25L698.337 365.162V359.273L694.554 353.701L703.383 345.814L707.272 349.916L713.787 348.969L718.726 354.121L725.134 352.02L730.32 347.499L740.968 345.814L744.051 339.122L748.953 338.138L754.558 332.113L761.423 325.804L769.408 319.354L770.951 311.361L767.029 309.681L767.869 306.176L766.749 303.091L771.651 301.127L774.034 287.108L766.469 283.324L762.823 269.305L762.23 249.711L755.085 242.141L758.448 223.741L750.916 205.653L752.035 195.77L746.15 194.929L734.173 208.915L725.661 207.338L721.879 213.33V217.745L715.257 224.688L717.78 231.627L715.257 237.936L719.356 241.721V251.815L711.474 259.067L711.787 269.165L718.092 273.893L715.574 285.881L703.593 289.036L697.917 284.304L687.829 286.828L684.364 295.345L677.112 302.914L655.989 307.333L650.314 330.358L644.642 336.668L650.314 349.599L647.161 367.789L651.787 371.154Z" },
                { id: "CE", d: "M771.651 301.127L779.253 303.232L788.711 298.5L799.116 303.232V308.911L804.157 313.008L813.615 307.333L817.398 298.5L812.039 290.35L817.398 278.312L815.505 273.893L820.551 268.531H825.597L830.955 257.177L836.314 242.664L846.612 241.824L845.138 236.779L836.524 234.885L834.211 230.47L829.379 228.996L819.081 214.277L811.093 212.383L798.692 201.659L785.031 193.459L774.734 191.355L763.806 194.09L752.035 195.77L750.916 205.654L758.448 223.741L755.085 242.141L762.23 249.711L762.823 269.305L766.469 283.324L774.034 287.109L771.651 301.127Z" },
                { id: "RN", d: "M887.383 280.202H874.142L868.154 274.21L862.795 276.735L865.318 285.564L862.165 291.873H858.066V285.564L851.761 284.934L846.612 288.406L840.413 284.621L842.619 277.365L849.238 271.056L846.612 268.531L835.684 273.263L834.108 278.312L827.173 281.467L817.398 278.312L815.505 273.893L820.551 268.531H825.597L830.955 257.177L836.314 242.664L846.612 241.824L850.184 244.139L855.44 242.878L858.803 245.819L870.78 247.713L875.825 245.189L886.333 247.713L886.123 260.962L887.383 280.202Z" },
                { id: "PB", d: "M884.864 307.646L877.295 313.008L869.1 309.541L861.219 313.008V319.947L851.444 323.736L847.978 320.582L848.925 316.793L843.879 314.903L851.444 300.707L846.612 298.5L836.627 307.333L827.173 313.008L821.497 309.224L815.505 311.118L813.615 307.333L817.398 298.5L812.039 290.35L817.398 278.312L827.173 281.466L834.108 278.312L835.684 273.263L846.612 268.531L849.238 271.056L842.619 277.365L840.413 284.621L846.612 288.406L851.761 284.934L858.066 285.564V291.873H862.165L865.318 285.564L862.795 276.735L868.154 274.21L874.142 280.202H887.383L884.864 307.646Z" },
                { id: "PE", d: "M886.123 334.563L872.463 338.138L870.15 343.607L861.531 347.812L852.497 348.656L842.2 339.612H836.314V335.407L832.322 336.457L831.058 342.557L823.493 347.391L821.6 340.662L801.634 333.303V329.308L797.852 328.044L789.658 330.778L784.822 335.827V340.452L777.257 341.647L775.783 348.236L769.482 351.176H765.066L767.589 343.607L762.967 336.668L754.558 332.113L761.423 325.804L769.408 319.354L770.951 311.361L767.029 309.681L767.869 306.176L766.749 303.091L771.651 301.127L779.253 303.231L788.711 298.5L799.116 303.231V308.91L804.157 313.008L813.615 307.333L815.505 311.118L821.497 309.223L827.173 313.008L836.627 307.333L846.612 298.5L851.444 300.707L843.879 314.903L848.925 316.793L847.978 320.582L851.444 323.736L861.219 319.947V313.008L869.1 309.541L877.295 313.008L884.864 307.646L886.123 334.563Z" },
                { id: "AL", d: "M886.123 334.563L872.463 338.138L870.15 343.607L861.531 347.812L852.497 348.656L842.2 339.612H836.314V335.407L832.322 336.458L831.058 342.557L823.493 347.392L828.852 353.281L838.837 358.12H844.508L853.547 362.324L854.596 367.789L861.531 369.474L866.507 375.293L868.611 369.684L874.352 366.039L881.217 355.665L886.123 334.563Z" },
                { id: "SE", d: "M827.882 351L826.095 356.049L827.882 361.094H832.821L834.924 369.087L830.508 370.348L832.401 377.287L829.038 378.971L826.095 376.447L821.473 377.077L820 381.702L827.882 389.485V394.95L834.924 398.315L841.999 397.265L847.46 389.695L850.543 382.826L859.092 375.252L865.537 373.012L860.561 367.193L853.626 365.509L852.576 360.044L843.538 355.839H837.867L827.882 351Z" },
                { id: "BA", d: "M651.787 371.154L641.28 379.147L634.554 391.136L630.558 393.446L633.291 399.335L638.547 401.019L636.024 416.998L639.806 421.837L638.547 434.456V443.285L640.646 448.334L638.757 460.532L647.161 466.842L644.712 479.036L645.552 482.82L641.21 486.465L643.728 488.29L651.018 485.345L662.645 476.091L666.567 475.951L674.556 468.522L685.903 464L695.571 466.557L693.468 474.131L702.576 477.916L708.741 474.131H714.067L730.18 485.625L733.263 483.665L736.626 486.749L742.787 484.785L753.159 494.039L752.455 500.068L757.081 500.488L761.143 497.963L775.014 501.468L785.945 507.357L785.241 513.106L777.397 519.695L776.137 523.62L778.656 525.58L776.977 527.545H771.091L770.112 539.039L779.36 548.853L776.993 552.378L789.97 560.631L795.749 551.484L799.848 550.43L803.211 545.698L800.902 543.388L801.215 534.344L803.528 528.982L802.688 525.72L804.684 514.469L810.043 505.22L809.936 501.221L807.1 496.913L807.24 490.954L804.437 477.215L804.297 472.727L807.66 465.997L808.36 456.604L805.981 454.643L805.701 452.399L808.779 450.294L809.203 445.67L806.68 442.445L807.1 439.5L819.851 433.896L829.099 425.342L835.684 415.948L842.969 399.545L835.894 400.595L828.852 397.231V391.766L820.97 383.982L822.444 379.357L827.066 378.727L830.009 381.252L833.371 379.567L831.478 372.628L835.894 371.368L833.791 363.374H828.852L827.066 358.33L828.852 353.281L823.493 347.392L821.6 340.662L801.634 333.303V329.308L797.852 328.044L789.658 330.778L784.821 335.827V340.452L777.257 341.647L775.783 348.236L769.482 351.176H765.066L767.589 343.607L762.967 336.668L754.558 332.113L748.952 338.138L744.051 339.122L740.968 345.814L730.32 347.499L725.134 352.02L718.726 354.121L713.787 348.969L707.272 349.916L703.383 345.814L694.554 353.701L698.337 359.273V365.162L687.829 379.25L682.153 376.779L676.795 378.727L669.596 385.77L662.031 383.142L657.566 377.937L658.183 372.492L656.463 368.263L652.944 367.789L651.787 371.154Z" },
            ],
            content: []
        }
    }
    style() {
        return `
            <style>
                .thp-brazil-map {
                    width:500px;
                }
                #AM, #PA, #MA, #CE, #PB, #AL, #SE, #BA, SP, #RJ, #MG, #ES, #SP {
                    fill: #80B356;
                    stroke: #2F431E;
                    transition: all 0.3s ease; 
                    
                }
                #AM:hover, #PA:hover, #MA:hover, #CE:hover,
                #PB:hover, #AL:hover, #SE:hover, #BA:hover,
                #SP:hover, #RJ:hover, #MG:hover, #ES:hover {
                    fill: #EC8A41;
                }
                svg path{
                    pointer-events:all;
                    stroke: #80B357;
                    stroke-width: 3; 
                    stroke-linecap: round;
                    stroke-linejoin: round; 
                }
                @media (max-width: 640px) {
                    .thp-brazil-map {
                        width:100%;
                    }
                }
            </style>
        `
    }
    createStates() {
        return this.data().states.reduce((acc, current) => acc + `<path id='${current.id}' d='${current.d}' />`, '');
    }
    render() {
        this.shadow.innerHTML = `
            ${this.style()}
            <svg class="thp-brazil-map" height="100%" viewBox="0 0 888 928" fill="none" xmlns="http://www.w3.org/2000/svg">
                ${this.createStates()} 
            </svg>
        `;
    }
}
customElements.define("brazil-map-component", BrazilMapComponent);

class MapContainerComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render();
    }
    style() {
        return `
            <style>
                .thp-brasilmap-container{
                    width:100vw;
                    height:100vh;
                    background-color:#2F431E;
                    display:flex;
                    align-items: center;
                    justify-content:center;
                }
            </style>
        `
    }
    render() {
        this.shadow.innerHTML = `
            ${this.style()}
            <div class="thp-brasilmap-container">
                <brazil-map-component></brazil-map-component>
            </div>
        `
    }
}
customElements.define("map-container-component", MapContainerComponent);