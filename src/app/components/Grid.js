import React from "react"
import '../../styles/Grid.css'

function Grid () {
    return (
        <div className="gridContainer">
            <svg className="grid" width="1025" height="1025" viewBox="0 0 1025 1025" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="gridPath" fill-rule="evenodd" clip-rule="evenodd" d="M12 0H14V11H25V11.9502H100V11H112V0H114V11H125V11.9502H200V11H212V0H214V11H225V11.9502H300V11H312V0H314V11H325V11.9502H400V11H412V0H414V11H425V11.9502H500V11H512V0H514V11H525V11.9502H600V11H612V0H614V11H625V11.9502H700V11H712V0H714V11H725V11.9502H800V11H812V0H814V11H825V11.9502H900V11H912V0H914V11H925V11.9502H1000V11H1012V0H1014V11H1025V13H1014V25H1013.05V100H1014V111H1025V113H1014V125H1013.05V200H1014V211H1025V213H1014V225H1013.05V300H1014V311H1025V313H1014V325H1013.05V400H1014V411H1025V413H1014V425H1013.05V500H1014V511H1025V513H1014V525H1013.05V600H1014V611H1025V613H1014V625H1013.05V700H1014V711H1025V713H1014V725H1013.05V800H1014V811H1025V813H1014V825H1013.05V900H1014V911H1025V913H1014V925H1013.05V1000H1014V1011H1025V1013H1014V1025H1012V1013H1000V1012.05H925V1013H914V1025H912V1013H900V1012.05H825V1013H814V1025H812V1013H800V1012.05H725V1013H714V1025H712V1013H700V1012.05H625V1013H614V1025H612V1013H600V1012.05H525V1013H514V1025H512V1013H500V1012.05H425V1013H414V1025H412V1013H400V1012.05H325V1013H314V1025H312V1013H300V1012.05H225V1013H214V1025H212V1013H200V1012.05H125V1013H114V1025H112V1013H100V1012.05H25V1013H14V1025H12V1013H0V1011H12V1000H12.9502V925H12V913H0V911H12V900H12.9502V825H12V813H0V811H12V800H12.9502V725H12V713H0V711H12V700H12.9502V625H12V613H0V611H12V600H12.9502V525H12V513H0V511H12V500H12.9502V425H12V413H0V411H12V400H12.9502V325H12V313H0V311H12V300H12.9502V225H12V213H0V211H12V200H12.9502V125H12V113H0V111H12V100H12.9502V25H12V13H0V11H12V0ZM13.0498 25V100H14V111H25V111.95H100V111H112V100H112.95V25H112V13H100V12.0503H25V13H14V25H13.0498ZM113.05 25V100H114V111H125V111.95H200V111H212V100H212.95V25H212V13H200V12.0503H125V13H114V25H113.05ZM213.05 25V100H214V111H225V111.95H300V111H312V100H312.95V25H312V13H300V12.0503H225V13H214V25H213.05ZM313.05 25V100H314V111H325V111.95H400V111H412V100H412.95V25H412V13H400V12.0503H325V13H314V25H313.05ZM413.05 25V100H414V111H425V111.95H500V111H512V100H512.95V25H512V13H500V12.0503H425V13H414V25H413.05ZM513.05 25V100H514V111H525V111.95H600V111H612V100H612.95V25H612V13H600V12.0503H525V13H514V25H513.05ZM613.05 25V100H614V111H625V111.95H700V111H712V100H712.95V25H712V13H700V12.0503H625V13H614V25H613.05ZM713.05 25V100H714V111H725V111.95H800V111H812V100H812.95V25H812V13H800V12.0503H725V13H714V25H713.05ZM813.05 25V100H814V111H825V111.95H900V111H912V100H912.95V25H912V13H900V12.0503H825V13H814V25H813.05ZM913.05 25V100H914V111H925V111.95H1000V111H1012V100H1012.95V25H1012V13H1000V12.0503H925V13H914V25H913.05ZM1000 112.05H925V113H914V125H913.05V200H914V211H925V211.95H1000V211H1012V200H1012.95V125H1012V113H1000V112.05ZM1000 212.05H925V213H914V225H913.05V300H914V311H925V311.95H1000V311H1012V300H1012.95V225H1012V213H1000V212.05ZM1000 312.05H925V313H914V325H913.05V400H914V411H925V411.95H1000V411H1012V400H1012.95V325H1012V313H1000V312.05ZM1000 412.05H925V413H914V425H913.05V500H914V511H925V511.95H1000V511H1012V500H1012.95V425H1012V413H1000V412.05ZM1000 512.05H925V513H914V525H913.05V600H914V611H925V611.95H1000V611H1012V600H1012.95V525H1012V513H1000V512.05ZM1000 612.05H925V613H914V625H913.05V700H914V711H925V711.95H1000V711H1012V700H1012.95V625H1012V613H1000V612.05ZM1000 712.05H925V713H914V725H913.05V800H914V811H925V811.95H1000V811H1012V800H1012.95V725H1012V713H1000V712.05ZM1000 812.05H925V813H914V825H913.05V900H914V911H925V911.95H1000V911H1012V900H1012.95V825H1012V813H1000V812.05ZM1000 912.05H925V913H914V925H913.05V1000H914V1011H925V1011.95H1000V1011H1012V1000H1012.95V925H1012V913H1000V912.05ZM912.95 1000V925H912V913H900V912.05H825V913H814V925H813.05V1000H814V1011H825V1011.95H900V1011H912V1000H912.95ZM812.95 1000V925H812V913H800V912.05H725V913H714V925H713.05V1000H714V1011H725V1011.95H800V1011H812V1000H812.95ZM712.95 1000V925H712V913H700V912.05H625V913H614V925H613.05V1000H614V1011H625V1011.95H700V1011H712V1000H712.95ZM612.95 1000V925H612V913H600V912.05H525V913H514V925H513.05V1000H514V1011H525V1011.95H600V1011H612V1000H612.95ZM512.95 1000V925H512V913H500V912.05H425V913H414V925H413.05V1000H414V1011H425V1011.95H500V1011H512V1000H512.95ZM412.95 1000V925H412V913H400V912.05H325V913H314V925H313.05V1000H314V1011H325V1011.95H400V1011H412V1000H412.95ZM312.95 1000V925H312V913H300V912.05H225V913H214V925H213.05V1000H214V1011H225V1011.95H300V1011H312V1000H312.95ZM212.95 1000V925H212V913H200V912.05H125V913H114V925H113.05V1000H114V1011H125V1011.95H200V1011H212V1000H212.95ZM112.95 1000V925H112V913H100V912.05H25V913H14V925H13.0498V1000H14V1011H25V1011.95H100V1011H112V1000H112.95ZM25 911.95H100V911H112V900H112.95V825H112V813H100V812.05H25V813H14V825H13.0498V900H14V911H25V911.95ZM25 811.95H100V811H112V800H112.95V725H112V713H100V712.05H25V713H14V725H13.0498V800H14V811H25V811.95ZM25 711.95H100V711H112V700H112.95V625H112V613H100V612.05H25V613H14V625H13.0498V700H14V711H25V711.95ZM25 611.95H100V611H112V600H112.95V525H112V513H100V512.05H25V513H14V525H13.0498V600H14V611H25V611.95ZM25 511.95H100V511H112V500H112.95V425H112V413H100V412.05H25V413H14V425H13.0498V500H14V511H25V511.95ZM25 411.95H100V411H112V400H112.95V325H112V313H100V312.05H25V313H14V325H13.0498V400H14V411H25V411.95ZM25 311.95H100V311H112V300H112.95V225H112V213H100V212.05H25V213H14V225H13.0498V300H14V311H25V311.95ZM25 211.95H100V211H112V200H112.95V125H112V113H100V112.05H25V113H14V125H13.0498V200H14V211H25V211.95ZM113.05 125V200H114V211H125V211.95H200V211H212V200H212.95V125H212V113H200V112.05H125V113H114V125H113.05ZM213.05 125V200H214V211H225V211.95H300V211H312V200H312.95V125H312V113H300V112.05H225V113H214V125H213.05ZM313.05 125V200H314V211H325V211.95H400V211H412V200H412.95V125H412V113H400V112.05H325V113H314V125H313.05ZM413.05 125V200H414V211H425V211.95H500V211H512V200H512.95V125H512V113H500V112.05H425V113H414V125H413.05ZM513.05 125V200H514V211H525V211.95H600V211H612V200H612.95V125H612V113H600V112.05H525V113H514V125H513.05ZM613.05 125V200H614V211H625V211.95H700V211H712V200H712.95V125H712V113H700V112.05H625V113H614V125H613.05ZM713.05 125V200H714V211H725V211.95H800V211H812V200H812.95V125H812V113H800V112.05H725V113H714V125H713.05ZM813.05 125V200H814V211H825V211.95H900V211H912V200H912.95V125H912V113H900V112.05H825V113H814V125H813.05ZM900 212.05H825V213H814V225H813.05V300H814V311H825V311.95H900V311H912V300H912.95V225H912V213H900V212.05ZM900 312.05H825V313H814V325H813.05V400H814V411H825V411.95H900V411H912V400H912.95V325H912V313H900V312.05ZM900 412.05H825V413H814V425H813.05V500H814V511H825V511.95H900V511H912V500H912.95V425H912V413H900V412.05ZM900 512.05H825V513H814V525H813.05V600H814V611H825V611.95H900V611H912V600H912.95V525H912V513H900V512.05ZM900 612.05H825V613H814V625H813.05V700H814V711H825V711.95H900V711H912V700H912.95V625H912V613H900V612.05ZM900 712.05H825V713H814V725H813.05V800H814V811H825V811.95H900V811H912V800H912.95V725H912V713H900V712.05ZM900 812.05H825V813H814V825H813.05V900H814V911H825V911.95H900V911H912V900H912.95V825H912V813H900V812.05ZM812.95 900V825H812V813H800V812.05H725V813H714V825H713.05V900H714V911H725V911.95H800V911H812V900H812.95ZM712.95 900V825H712V813H700V812.05H625V813H614V825H613.05V900H614V911H625V911.95H700V911H712V900H712.95ZM612.95 900V825H612V813H600V812.05H525V813H514V825H513.05V900H514V911H525V911.95H600V911H612V900H612.95ZM512.95 900V825H512V813H500V812.05H425V813H414V825H413.05V900H414V911H425V911.95H500V911H512V900H512.95ZM412.95 900V825H412V813H400V812.05H325V813H314V825H313.05V900H314V911H325V911.95H400V911H412V900H412.95ZM312.95 900V825H312V813H300V812.05H225V813H214V825H213.05V900H214V911H225V911.95H300V911H312V900H312.95ZM212.95 900V825H212V813H200V812.05H125V813H114V825H113.05V900H114V911H125V911.95H200V911H212V900H212.95ZM125 811.95H200V811H212V800H212.95V725H212V713H200V712.05H125V713H114V725H113.05V800H114V811H125V811.95ZM125 711.95H200V711H212V700H212.95V625H212V613H200V612.05H125V613H114V625H113.05V700H114V711H125V711.95ZM125 611.95H200V611H212V600H212.95V525H212V513H200V512.05H125V513H114V525H113.05V600H114V611H125V611.95ZM125 511.95H200V511H212V500H212.95V425H212V413H200V412.05H125V413H114V425H113.05V500H114V511H125V511.95ZM125 411.95H200V411H212V400H212.95V325H212V313H200V312.05H125V313H114V325H113.05V400H114V411H125V411.95ZM125 311.95H200V311H212V300H212.95V225H212V213H200V212.05H125V213H114V225H113.05V300H114V311H125V311.95ZM213.05 225V300H214V311H225V311.95H300V311H312V300H312.95V225H312V213H300V212.05H225V213H214V225H213.05ZM313.05 225V300H314V311H325V311.95H400V311H412V300H412.95V225H412V213H400V212.05H325V213H314V225H313.05ZM413.05 225V300H414V311H425V311.95H500V311H512V300H512.95V225H512V213H500V212.05H425V213H414V225H413.05ZM513.05 225V300H514V311H525V311.95H600V311H612V300H612.95V225H612V213H600V212.05H525V213H514V225H513.05ZM613.05 225V300H614V311H625V311.95H700V311H712V300H712.95V225H712V213H700V212.05H625V213H614V225H613.05ZM713.05 225V300H714V311H725V311.95H800V311H812V300H812.95V225H812V213H800V212.05H725V213H714V225H713.05ZM800 312.05H725V313H714V325H713.05V400H714V411H725V411.95H800V411H812V400H812.95V325H812V313H800V312.05ZM800 412.05H725V413H714V425H713.05V500H714V511H725V511.95H800V511H812V500H812.95V425H812V413H800V412.05ZM800 512.05H725V513H714V525H713.05V600H714V611H725V611.95H800V611H812V600H812.95V525H812V513H800V512.05ZM800 612.05H725V613H714V625H713.05V700H714V711H725V711.95H800V711H812V700H812.95V625H812V613H800V612.05ZM800 712.05H725V713H714V725H713.05V800H714V811H725V811.95H800V811H812V800H812.95V725H812V713H800V712.05ZM712.95 800V725H712V713H700V712.05H625V713H614V725H613.05V800H614V811H625V811.95H700V811H712V800H712.95ZM612.95 800V725H612V713H600V712.05H525V713H514V725H513.05V800H514V811H525V811.95H600V811H612V800H612.95ZM512.95 800V725H512V713H500V712.05H425V713H414V725H413.05V800H414V811H425V811.95H500V811H512V800H512.95ZM412.95 800V725H412V713H400V712.05H325V713H314V725H313.05V800H314V811H325V811.95H400V811H412V800H412.95ZM312.95 800V725H312V713H300V712.05H225V713H214V725H213.05V800H214V811H225V811.95H300V811H312V800H312.95ZM225 711.95H300V711H312V700H312.95V625H312V613H300V612.05H225V613H214V625H213.05V700H214V711H225V711.95ZM225 611.95H300V611H312V600H312.95V525H312V513H300V512.05H225V513H214V525H213.05V600H214V611H225V611.95ZM225 511.95H300V511H312V500H312.95V425H312V413H300V412.05H225V413H214V425H213.05V500H214V511H225V511.95ZM225 411.95H300V411H312V400H312.95V325H312V313H300V312.05H225V313H214V325H213.05V400H214V411H225V411.95ZM313.05 325V400H314V411H325V411.95H400V411H412V400H412.95V325H412V313H400V312.05H325V313H314V325H313.05ZM413.05 325V400H414V411H425V411.95H500V411H512V400H512.95V325H512V313H500V312.05H425V313H414V325H413.05ZM513.05 325V400H514V411H525V411.95H600V411H612V400H612.95V325H612V313H600V312.05H525V313H514V325H513.05ZM613.05 325V400H614V411H625V411.95H700V411H712V400H712.95V325H712V313H700V312.05H625V313H614V325H613.05ZM700 412.05H625V413H614V425H613.05V500H614V511H625V511.95H700V511H712V500H712.95V425H712V413H700V412.05ZM700 512.05H625V513H614V525H613.05V600H614V611H625V611.95H700V611H712V600H712.95V525H712V513H700V512.05ZM700 612.05H625V613H614V625H613.05V700H614V711H625V711.95H700V711H712V700H712.95V625H712V613H700V612.05ZM612.95 700V625H612V613H600V612.05H525V613H514V625H513.05V700H514V711H525V711.95H600V711H612V700H612.95ZM512.95 700V625H512V613H500V612.05H425V613H414V625H413.05V700H414V711H425V711.95H500V711H512V700H512.95ZM412.95 700V625H412V613H400V612.05H325V613H314V625H313.05V700H314V711H325V711.95H400V711H412V700H412.95ZM325 611.95H400V611H412V600H412.95V525H412V513H400V512.05H325V513H314V525H313.05V600H314V611H325V611.95ZM325 511.95H400V511H412V500H412.95V425H412V413H400V412.05H325V413H314V425H313.05V500H314V511H325V511.95ZM413.05 425V500H414V511H425V511.95H500V511H512V500H512.95V425H512V413H500V412.05H425V413H414V425H413.05ZM513.05 425V500H514V511H525V511.95H600V511H612V500H612.95V425H612V413H600V412.05H525V413H514V425H513.05ZM600 512.05H525V513H514V525H513.05V600H514V611H525V611.95H600V611H612V600H612.95V525H612V513H600V512.05ZM512.95 600V525H512V513H500V512.05H425V513H414V525H413.05V600H414V611H425V611.95H500V611H512V600H512.95Z" fill="currentColor"/>
            </svg>
        </div>
    )
}

export default Grid