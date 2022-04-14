import Validation = require('./Validation');

module Validators {
    
    //returns true if is a valid string, otherwise if the string length exceeds 6, False
    export class aircraftAddressValidator implements Validation.IStringValidator{
        isAcceptable(value: string) {
            if (value.length > 6) {
                return false;
            }
        }
        tagName = "aircraftAddress";
    }

    //returns false if the string length is not 2,3 and 4
    export class aircraftTypeDesignatorValidator {
        isAcceptable(value: string) {
            if (value.length == 2 || value.length == 3 || value.length == 4) {
                return true;
            } else {
                return false;
            }
        }
        tagName = "aircrafttypedesignator";
    }

    //returns true if it is a valid string ISO date representation that can be parsed as ISO date, otherwise False
    export class DateISOValidator {
        isAcceptable (s: string) {
            return /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(s);
        }
        tagName = "dateISO";
    }

    //returns true if it is a valid string, otherwise False
    export class commCapabilityCodeValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'A', 'B', 'C', 'D', 'E1', 'E2', 'E3', 'F', 'G', 'H', 'I', 'J1', 'J2', 'N',
                        'J3', 'J4', 'J5', 'J6', 'J7', 'K', 'L', 'M1', 'M2', 'M3', 'O', 'R', 'T', 'U', 
                        'V', 'W', 'X', 'Y', 'Z', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9',
                        'Q', 'S') {
                            return true;
                        } else {
                            return false;
                        }
        }
        tagName = "communicationcapabilitycode";
    }

    export class wakeTurbulenceCat implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'J', 'H', 'M', 'L') {
                return true;
            } else {
                return false;
            }
        }
        tagName = "waketurbulencecategory";
    }

    export class datalinkComCapabilityCodeValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'A', 'B', 'C', 'D', 'E1', 'E2', 'E3', 'F', 'G', 'H', 'I', 'J1', 'J2', 'N',
                        'J3', 'J4', 'J5', 'J6', 'J7', 'K', 'L', 'M1', 'M2', 'M3', 'O', 'R', 'T', 'U', 
                        'V', 'W', 'X', 'Y', 'Z', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9',
                        'Q', 'S') {
                            return true;
                        } else {
                            return false;
                        }
        }
        tagName = "datalinkcommunicationcapabilitycode";
    }

    export class naviCapabilityCodeValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'A', 'B', 'C', 'D', 'E1', 'E2', 'E3', 'F', 'G', 'H', 'I', 'J1', 'J2', 'N',
                        'J3', 'J4', 'J5', 'J6', 'J7', 'K', 'L', 'M1', 'M2', 'M3', 'O', 'R', 'T', 'U', 
                        'V', 'W', 'X', 'Y', 'Z', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9',
                        'Q', 'S') {
                            return true;
                        } else {
                            return false;
                        }
        }
        tagName = "navicommunicationcapabilitycode";
    }

    export class surveillanceCapabilityCodeValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'A', 'B1', 'B2', 'C', 'D1', 'F', 'G1', 'H', 'I', 'N', 'E', 'L', 'P', 'S', 'X',
                        'U1', 'U2', 'V1', 'V2') {
                            return true;
                        } else {
                            return false;
                        }
        }
        tagName = "surveillancecapabilitycode";
    }

    export class standardCapabilityValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value != 'STANDARD') {
                return false;
            }
        }
        tageName = "standardcapability"
    }

    export class locationIndicatorValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            if (value = 'AGAF', 'AGAR', 'AGAT', 'AGBA', 'AGBT', 'AGEV', 'AGGA', 'AGGB', 'AGGC', 'AGGD', 'AGGD', 'AGGE', 'AGGF', 'AGGG', 'AGGH', 'AGGI', 'AGGK', 'AGGL', 'AGGM', 'AGGN',
                        'AGGO', 'AGGP', 'AGGQ', 'AGGR', 'AGGS', 'AGGT', 'AGGU', 'AGGV', 'AGGY', 'AGIN', 'AGKG', 'AGKU', 'AGLM', 'AGOK', 'AGRC', 'AGRM', 'AGTI', 'ANAU', 'ANYN', 'AYAA', 
                        'AYBK', 'AYBU', 'AYCH', 'AYDU', 'AYGA', 'AYGN', 'AYGR', 'AYHK', 'AYIQ', 'AYKA', 'AYKI', 'AYKK', 'AYKM', 'AYKT', 'AYKV', 'AYKY', 'AYLA', 'AYMD', 'AYMH', 'AYMN',
                        'AYMO', 'AYMR', 'AYMS', 'AYNZ', 'AYPY', 'AYRB', 'AYTA', 'AYTB', 'AYTK', 'AYTT', 'AYVN', 'AYWD', 'AYWK',
                        
                        'BGAA', 'BGAG', 'BGAK', 'BGAM', 'BGAP', 'BGAQ', 'BGAR', 'BGAS', 'BGAT', 'BGBW', 'BGCH', 'BGCO', 'BGET', 'BGFD', 'BGGD', 'BGGH', 'BGGN', 'BGIA', 'BGIG', 'BGIK',
                        'BGIL', 'BGIN', 'BGIS', 'BGIT', 'BGJH', 'BGJN', 'BGKA', 'BGKK', 'BGKL', 'BGKM', 'BGKQ', 'BGKS', 'BGKT', 'BGLL', 'BGMO', 'BGMQ', 'BGNK', 'BGNL', 'BGNN', 'BGNQ',
                        'BGNS', 'BGNT', 'BGNU', 'BGPT', 'BGQE', 'NGQQ', 'BGQT', 'BGSC', 'BGSF', 'BGSG', 'BGSI', 'BGSO', 'BGSQ', 'BGSS', 'BGST', 'BGSV', 'BGTA', 'BGTL', 'BGTN', 'BGTQ', 
                        'BGUK', 'BGUM', 'BGUQ', 'BGUT', 'BIAR', 'BIBA', 'BIBD', 'BIBK', 'BIBL', 'BIBR', 'BIDV', 'BIEG', 'BIGJ', 'BIGR', 'BIHN', 'BIHU', 'BIIS', 'BIKF', 'BIKP', 'BIKR',
                        'BINF', 'BIPA', 'BIRF', 'BIRG', 'BIRK', 'BISF', 'BISI', 'BIST', 'BITE', 'BITN', 'BIVM', 'BIVO', 'BKPR',

                        'CYAB', 'CYAC', 'CYAD', 'CYAH', 'CYAL', 'CYAM', 'CYAQ', 'CYAS', 'CYAT', 'CYAU', 'CYAV', 'CYAW', 'CYAX', 'CYAY', 'CYAZ', 'CYB3', 'CYBA', 'CYBB', 'CYBC', 'CYBD',
                        'CYBE', 'CYBF', 'CYBG', 'CYBK', 'CYBL', 'CYBN', 'CYBP', 'CYBQ', 'CYBR', 'CYBT', 'CYBU', 'CYBV', 'CYBW', 'CYBX', 'CYCB', 'CYCC', 'CYCD', 'CYCE', 'CYCG', 'CYCH',
                        'CYCK', 'CYCL', 'CYCN', 'CYCO', 'CYCP', 'CYCQ', 'CYCR', 'CYCS', 'CYCT', 'CYCW', 'CYCX', 'CYCY', 'CYCZ', 'CYD2', 'CYDA', 'CYDB', 'CYDC', 'CYDF', 'CYDH', 'CYDL',
                        'CYDM', 'CYDN', 'CYDO', 'CYDP', 'CYDQ', 'CYD2', 'CYEA', 'CYED', 'CYEE', 'CYEG', 'CYEK', 'CYEL', 'CYEM', 'CYEN', 'CYER', 'CYES', 'CYET', 'CYEU', 'CYEV', 'CYEY',
                        'CYFA', 'CYFB', 'CYFC', 'CYFD', 'CYFE', 'CYFH', 'CYFI', 'CYFJ', 'CYFO', 'CYFR', 'CYFS', 'CYFT', 'CYG2', 'CYGB', 'CYGD', 'CYGE', 'CYGH', 'CYGK', 'CYGL', 'CYGM',
                        'CYGO', 'CYGP', 'CYGQ', 'CYGR', 'CYGT', 'CYGV', 'CYGW', 'CYGX', 'CYGZ', 'CYHA', 'CYHB', 'CYHC', 'CYHD', 'CYHE', 'CYHF', 'CYHH', 'CYHI', 'CYHK', 'CYHM', 'CYHN',
                        'CYHO', 'CYHP', 'CYHR', 'CYHS', 'CYHT', 'CYHU', 'CYHY', 'CYHZ', 'CYIB', 'CYID', 'CYIF', 'CYIK', 'CYIO', 'CYIV', 'CYJA', 'CYJF', 'CYJM', 'CYJN', 'CYJP', 'CYJQ',
                        'CYJT', 'CYKA', 'CYKC', 'CYKD', 'CYKF', 'CYKG', 'CYKJ', 'CYKL', 'CYKM', 'CYKO', 'CYKP', 'CYKQ', 'CYKX', 'CYKY', 'CYKZ', 'CYLA', 'CYLB', 'CYLC', 'CYLD', 'CYLH',
                        'CYLI', 'CYLJ', 'CYLK', 'CYLL', 'CYLQ', 'CYLR', 'CYLS', 'CYLT', 'CYLU', 'CYLW', 'CYMA', 'CYME', 'CYMG', 'CYMH', 'CYMJ', 'CYML', 'CYMM', 'CYMO', 'CYMT', 'CYMU',
                        'CYMW', 'CYMX', 'CYN6', 'CYNA', 'CYNC', 'CYND', 'CYNE', 'CYNH', 'CYNJ', 'CYNL', 'CYNM', 'CYNN', 'CYNR', 'CYOA', 'CYOC', 'CYOD', 'CYOH', 'CYOJ', 'CYOO', 'CYOP',
                        'CYOS', 'CYOW', 'CYOY', 'CYPA', 'CYPC', 'CYPD', 'CYPE', 'CYPG', 'CYPH', 'CYPK', 'CYPL', 'CYPM', 'CYPN', 'CYPO', 'CYPP', 'CYPQ', 'CYPR', 'CYPS', 'CYPU', 'CYPW',
                        'CYPX', 'CYPZ', 'CYQA', 'CYQB', 'CYQD', 'CYQF', 'CYQG', 'CYQH', 'CYQI', 'CYQK', 'CYQL', 'CYQM', 'CYQN', 'CYQQ', 'CYQR', 'CYQS', 'CYQT', 'CYQU', 'CYQV', 'CYQW',
                        'CYQX', 'CYQY', 'CYQZ', 'CYRA', 'CYRB', 'CYRC', 'CYRI', 'CYRJ', 'CYRL', 'CYRM', 'CYRO', 'CYRP', 'CYRQ', 'CYRS', 'CYRT', 'CYRV', 'CYSA', 'CYSB', 'CYSC', 'CYSD',
                        'CYSE', 'CYSF', 'CYSG', 'CYSH', 'CYSJ', 'CYSK', 'CYSL', 'CYSM', 'CYSN', 'CYSP', 'CYSQ', 'CYST', 'CYSU', 'CYSW', 'CYSY', 'CYSZ', 'CYTA', 'CYTB', 'CYTE', 'CYTF',
                        'CYTH', 'CYTL', 'CYTN', 'CYTQ', 'CYTR', 'CYTS', 'CYTZ', 'CYUB', 'CYUL', 'CYUT', 'CYUX', 'CYUY', 'CYVB', 'CYVC', 'CYVD', 'CYVG', 'CYVK', 'CYVL', 'CYVM', 'CYVO',
                        'CYVP', 'CYVQ', 'CYVR', 'CYVT', 'CYVV', 'CYVZ', 'CYWA', 'CYWE', 'CYWG', 'CYWH', 'CYWJ', 'CYWK', 'CYWL', 'CYWM', 'CYWN', 'CYWP', 'CYWV', 'CYWY', 'CYXC', 'CYXE',
                        'CYXH', 'CYXJ', 'CYXK', 'CYXL', 'CYXN', 'CYXP', 'CYXQ', 'CYXR', 'CYXS', 'CYXT', 'CYXU', 'CYXX', 'CYXY', 'CYXZ', 'CYYB', 'CYYC', 'CYYD', 'CYYE', 'CYYF', 'CYYG',
                        'CYYH', 'CYYJ', 'CYYL', 'CYYM', 'CYYN', 'CYYO', 'CYYQ', 'CYYR', 'CYYT', 'CYYU', 'CYYW', 'CYYY', 'CYYZ', 'CYZD', 'CYZE', 'CYZF', 'CYZG', 'CYZH', 'CYZP', 'CYZR',
                        'CYZS', 'CYZT', 'CYZU', 'CYZV', 'CYZW', 'CYZX', 'CYZY', 'CZAC', 'CZAM', 'CZBA', 'CZBB', 'CZBD', 'CZBF', 'CZBM', 'CZEE', 'CZEM', 'CZF2', 'CZFA', 'CZFD', 'CZFG',
                        'CZFM', 'CZFN', 'CZGF', 'CZGI', 'CZGR', 'CZHP', 'CZJG', 'CZJN', 'CZKE', 'CZLQ', 'CZMD', 'CZML', 'CZMN', 'CZMT', 'CZNG', 'CZNL', 'CZPB', 'CZPC', 'CZPO', 'CZRJ',
                        'CZSJ', 'CZSN', 'CZST', 'CZSW', 'CZTA', 'CZTM', 'CZUC', 'CZUM', 'CZVL', 'CZWH', 'CZWL',

                        'DAAB', 'DAAD', 'DAAE', 'DAAG', 'DAAJ', 'DAAK', 'DAAP', 'DAAS', 'DAAT', 'DAAV', 'DAAY', 'DAAZ', 'DABB', 'DABC', 'DABP', 'DABS', 'DABT', 'DAFH', 'DAFI', 'DAOB',
                        'DAOF', 'DAOI', 'DAOL', 'DAON', 'DAOO', 'DAOR', 'DAOS', 'DAOV', 'DATG', 'DATM', 'DAUA', 'DAUB', 'DAUE', 'DAUG', 'DAUH', 'DAUI', 'DAUK', 'DAUL', 'DAUO', 'DAUU',
                        'DAUZ', 'DBBB', 'DBBC', 'DBBD', 'DBBN', 'DBBO', 'DBBP', 'DBBR', 'DBBS', 'DFCA', 'DFCC', 'DFCJ', 'DFCL', 'DFCP', 'DFEA', 'DFEB', 'DFED', 'DFEE', 'DFEF', 'DFEG',
                        'DFEL', 'DFEM', 'DFEP', 'DFES', 'DFET', 'DFEZ', 'DFFD', 'DFOB', 'DFOD', 'DFON', 'DFOO', 'DFOT', 'DFOU', 'DFOY', 'DGAA', 'DGAH', 'DGLE', 'DGLN', 'DGLW', 'DGLY',
                        'DGSI', 'DGSN', 'DGSO', 'DGTK', 'DIAO', 'DIAP', 'DIAU', 'DIBI', 'DIBK', 'DIBN', 'DIBU', 'DIDK', 'DIDL', 'DIDV', 'DIFK', 'DIGA', 'DIGL', 'DIKO', 'DIMN', 'DIOD',
                        'DIOF', 'DISG', 'DISP', 'DISS', 'DITB', 'DITM', 'DIYO', 'DNAA', 'DNAK', 'DNAI', 'DNAS', 'DNBE', 'DNBI', 'DNBK', 'DNCA', 'DNDS', 'DNEN', 'DNGU', 'DNIB', 'DNIL',
                        'DNIM', 'DNJO', 'DNKA', 'DNKN', 'DNMA', 'DNMK', 'DNMM', 'DNMN', 'DNOS', 'DNPO', 'DNSO', 'DNYO', 'DNZA', 'DRRA', 'DRRC', 'DRRD', 'DRRE', 'DRRG', 'DRRL', 'DRRM',
                        'DRRN', 'DRRP', 'DRRT', 'DRRU', 'DRZA', 'DRZD', 'DRZF', 'DRZG', 'DRZI', 'DRZL', 'DRZM', 'DRZR', 'DTKA', 'DTMB', 'DTNH', 'DTTA', 'DTTB', 'DTTF', 'DTTG', 'DTTJ',
                        'DTTX', 'DTTZ', 'DXAK', 'DXDP', 'DXKP', 'DXMG', 'DXNG', 'DXSK', 'DXXX',

                        'EBAW', 'EBBR', 'EBCI', 'EBKT', 'EBLG', 'EBOS', 'EBBE', 'EBBL', 'EBBX', 'EBCV', 'EBDT', 'EBFN', 'EBFS', 'EBLB', 'EBMB', 'EBSU', 'EBUL', 'EBWE', 'EBBT', 'EBCF',
                        'EBGB', 'EBGG', 'EBHN', 'EBKH', 'EBLE', 'EBMO', 'EBNM', 'EBSG', 'EBSH', 'EBSL', 'EBSP', 'EBST', 'EBTN', 'EBTX', 'EBTY', 'EBZH', 'EBZR', 'EBZW', 'EBAM', 'EBAR',
                        'EBAV', 'EBBN', 'EBBY', 'EBBZ', 'EBIS', 'EBLN', 'EBMG', 'EBML', 'EBNE', 'EBOR', 'EBZU', 'EBAL', 'EBBA', 'EBEU', 'EBGA', 'EBGE', 'EBGT', 'EBKG', 'EBLC', 'EBLS',
                        'EBMD', 'EBMS', 'EBMT', 'EBNB', 'EBSJ', 'EBSS', 'EBUB', 'EBUC', 'EBVS', 'EBYP', 'EBAK', 'EBAS', 'EBBC', 'EBBH', 'EBBM', 'EBBV', 'EBCH', 'EBDI', 'EBDL', 'EBDR',
                        'EBDW', 'EBEB', 'EBEN', 'EBFR', 'EBHA', 'EBHL', 'EBHM', 'EBHO', 'EBHT', 'EBKR', 'EBKU', 'EBKW', 'EBLM', 'EBLR', 'EBLT', 'EBLU', 'EBLY', 'EBLZ', 'EBME', 'EBMW',
                        'EBNH', 'EBNK', 'EBNP', 'EBOB', 'EBOO', 'EBPW', 'EBRO', 'EBRR', 'EBSW', 'EBTK', 'EBVE', 'EBVU', 'EBWA', 'EBWI', 'EBWZ', 'EBZI', 'EBZM', 'EBZO', 'EDAC', 'EDAD',
                        'EDAH', 'EDAP', 'EDAV', 'EDAX', 'EDAZ', 'EDBC', 'EDBH', 'EDBM', 'EDBN', 'EDBS', 'EDCA', 'EDCG', 'EDCI', 'EDCP', 'EDDB', 'EDDC', 'EDDF', 'EDDG', 'EDDH', 'EDDK',
                        'EDDL', 'EDDM', 'EDDN', 'EDDP', 'EDDR', 'EDDS', 'EDDV', 'EDDW', 'EDEB', 'EDEH', 'EDER', 'EDFB', 'EDFC', 'EDFE', 'EDFG', 'EDFH', 'EDFK', 'EDFM', 'EDFQ', 'EDFT',
                        'EDFW', 'EDFZ', 'EDGA', 'EDGB', 'EDGE', 'EDGO', 'EDGP', 'EDGS', 'EDGX', 'EDGY', 'EDHE', 'EDHG', 'EDHI', 'EDHK', 'EDHL', 'EDHM', 'EDHS', 'EDJA', 'EDKA', 'EDKB',
                        'EDKL', 'EDKV', 'EDLB', 'EDLC', 'EDLD', 'EDLE', 'EDLF', 'EDLG', 'EDLK', 'EDLN', 'EDLO', 'EDLP', 'EDLR', 'EDLS', 'EDLT', 'EDLV', 'EDLW', 'EDLX', 'EDLZ', 'EDMA',
                        'EDME', 'EDMO', 'EDMQ', 'EDMS', 'EDMT', 'EDMV', 'EDNR', 'EDNY', 'EDOD', 'EDOJ', 'EDON', 'EDOP', 'EDOV', 'EDQA', 'EDQB', 'EDQC', 'EDQD', 'EDQE', 'EDQG', 'EDQH',
                        'EDQL', 'EDQM', 'EDQY', 'EDRB', 'EDRE', 'EDRH', 'EDRI', 'EDRK', 'EDRN', 'EDRT', 'EDRY', 'EDRZ', 'EDSB', 'EDSN', 'EDSP', 'EDTB', 'EDTD', 'EDTE', 'EDTF', 'EDTG',
                        'EDTL', 'EDTM', 'EDTQ', 'EDTR', 'EDTX', 'EDTY', 'EDVA', 'EDVE', 'EDVI', 'EDVK', 'EDVM', 'EDVW', 'EDWC', 'EDWE', 'EDWF', 'EDWG', 'EDWH', 'EDWI', 'EDWJ', 'EDWO',
                        'EDWR', 'EDWS', 'EDWU', 'EDWY', 'EDXA', 'EDXB', 'EDXF', 'EDXH', 'EDXJ', 'EDXK', 'EDXM', 'EDXO', 'EDXP', 'EDXW', 'ETAD', 'ETAR', 'ETEB', 'ETEK', 'ETHA', 'ETHB',
                        'ETHC', 'ETHE', 'ETHF', 'ETHL', 'ETHN', 'ETHR', 'ETHS', 'ETHT', 'ETIC', 'ETIH', 'ETMN', 'ETND', 'ETNG', 'ETNH', 'ETNJ', 'ETNK', 'ETNL', 'ETNN', 'ETNP', 'ETNS',
                        'ETNT', 'ETNW', 'ETOR', 'ETOU', 'ETSA', 'ETSB', 'ETSH', 'ETSI', 'ETSK', 'ETSL', 'ETSN', 'ETUL', 'ETUO', 'ETUR', 'EECL', 'EEEI', 'EEHU', 'EEJI', 'EEKA', 'EEKE',
                        'EEKU', 'EELU', 'EENI', 'EENA', 'EEPR', 'EEPU', 'EERA', 'EERI', 'EERU', 'EETA', 'EETN', 'EETR', 'EETU', 'EEVI', 'EFAH', 'EFAL', 'EFET', 'EFEU', 'EFFO', 'EFHA',
                        'EFHE', 'EFHF', 'EFHK', 'EFHM', 'EFHN', 'EFHV', 'EFIK', 'EFIM', 'EFIT', 'EFIV', 'EFJM', 'EFJO', 'EFJY', 'EFKA', 'EFKE', 'EFKH', 'EFKI', 'EFKJ', 'EFKK', 'EFKM',
                        'EFKO', 'EFKS', 'EFKU', 'EFKV', 'EFKY', 'EFLA', 'EFLP', 'EFMA', 'EFME', 'EFMI', 'EFNU', 'EFOU', 'EFPI', 'EFPK', 'EFPO', 'EFPR', 'EFPU', 'EFPY', 'EFRH', 'EFRN',
                        'EFRO', 'EFRU', 'EFRV', 'EFRY', 'EFSA', 'EFSE', 'EFSO', 'EFTP', 'EFTS', 'EFTU', 'EFUT', 'EFVA', 'EFVR', 'EFYL', 'EGAA', 'EGAB', 'EGAC', 'EGAD', 'EGAE', 'EGAH',
                        'EGAR', 'EGBB', 'EGBC', 'EGBD', 'EGBE', 'EGBF', 'EGBG', 'EGBJ', 'EGBK', 'EGBM', 'EGBN', 'EGBO', 'EGBP', 'EGBS', 'EGBT', 'EGBV', 'EGBW', 'EGCA', 'EGCB', 'EGCC',
                        'EGCF', 'EGCG', 'EGCJ', 'EGCK', 'EGCL', 'EGCM', 'EGCN', 'EGCO', 'EGCP', 'EGCR', 'EGCS', 'EGCT', 'EGCV', 'EGCW', 'EGDA', 'EGDB', 'EGDC', 'EGDD', 'EGDF', 'EGDH',
                        'EGDI', 'EGDJ', 'EGDL', 'EGDM', 'EGDN', 'EGDR', 'EGDS', 'EGDT', 'EGDV', 'EGDW', 'EGDY', 'EGEA', 'EGEC', 'EGED', 'EGEF', 'EGEG', 'EGEH', 'EGEL', 'EGEN', 'EGEO',
                        'EGEP', 'EGER', 'EGES', 'EGET', 'EGEY', 'EGFA', 'EGFC', 'EGFE', 'EGFF', 'EGFH', 'EGFP', 'EGGD', 'EGGP', 'EGGW', 'EGHA', 'EGHC', 'EGHD', 'EGHE', 'EGHF', 'EGHG',
                        'EGHH', 'EGHI', 'EGHJ', 'EGHK', 'EGHM', 'EGHN', 'EGHO', 'EGHP', 'EGHQ', 'EGHR', 'EGHS', 'EGHT', 'EGHU', 'EGHY', 'EGJA', 'EGJB', 'EGJJ', 'EGKA', 'EGKB', 'EGKD',
                        'EGKE', 'EGKG', 'EGKH', 'EGKK', 'EGKL', 'EGKR', 'EGLA', 'EGLB', 'EGLC', 'EGLD', 'EGLI', 'EGLJ', 'EGLK', 'EGLL', 'EGLM', 'EGLP', 'EGLS', 'EGLT', 'EGLW', 'EGMA',
                        'EGMC', 'EGMD', 'EGMF', 'EGMH', 'EGMA', 'EGMJ', 'EGML', 'EGMT', 'EGNA', 'EGNB', 'EGNC', 'EGND', 'EGNE', 'EGNF', 'EGNG', 'EGNI', 'EGNH', 'EGNJ', 'EGNL', 'EGNM',
                        'EGNO', 'EGNR', 'EGNS', 'EGNT', 'EGNU', 'EGNV', 'EGNW', 'EGNX', 'EGNY', 'EGOA', 'EGOB', 'EGOC', 'EGOD', 'EGOE', 'EGOJ', 'EGOM', 'EGOQ', 'EGOS', 'EGOV', 'EGOW',
                        'EGOY', 'EGPA', 'EGPB', 'EGPC', 'EGPD', 'EGPE', 'EGPF', 'EGPG', 'EGPH', 'EGPI', 'EGPJ', 'EGPK', 'EGPL', 'EGPM', 'EGPN', 'EGPO', 'EGPR', 'EGPS', 'EGPT', 'EGPU',
                        'EGPW', 'EGQA', 'EGQC', 'EGQD', 'EGQK', 'EGQL', 'EGQM', 'EGQS', 'EGSA', 'EGSB', 'EGSC', 'EGSD', 'EGSE', 'EGSF', 'EGSG', 'EGSH', 'EGSI', 'EGSJ', 'EGSL', 'EGSM',
                        'EGSN', 'EGSO', 'EGSP', 'EGSQ', 'EGSR', 'EGSS', 'EGST', 'EGSU', 'EGSV', 'EGSW', 'EGSX', 'EGSY', 'EGTA', 'EGTB', 'EGTC', 'EGTD', 'EGTE', 'EGTF', 'EGTH', 'EGTK',
                        'EGTN', 'EGTO', 'EGTP', 'EGTR', 'EGTU', 'EGTW', 'EGUB', 'EGUD', 'EGUK', 'EGUL', 'EGUN', 'EGUO', 'EGUU', 'EGUW', 'EGUY', 'EGVA', 'EGVB', 'EGVF', 'EGVG', 'EGVH',
                        'EGVI', 'EGVJ', 'EGVL', 'EGVN', 'EGVO', 'EGVP', 'EGVW', 'EGWC', 'EGWE', 'EGWL', 'EGWN', 'EGWR', 'EGWU', 'EGWZ', 'EGXB', 'EGXC', 'EGXD', 'EGXE', 'EGXF', 'EGXG',
                        'EGXH', 'EGXI', 'EGXP', 'EGXT', 'EGXU', 'EGXW', 'EGXY', 'EGXZ', 'EGYD', 'EGYE', 'EGYH', 'EGYM', 'EGYP', 'EHAL', 'EHAL', 'EHAM', 'EHBD', 'EHBK', 'EHDB', 'EHDL',
                        'EHDP', 'EHDR', 'EHEH', 'EHGG', 'EHGR', 'EHHE', 'EHHO', 'EHHV', 'EHKD', 'EHLE', 'EHLW', 'EHMC', 'EHMZ', 'EHND', 'EHOW', 'EHRD', 'EHSB', 'EHSE', 'EHST', 'EHTE',
                        'EHTL', 'EHTW', 'EHTX', 'EHVB', 'EHVK', 'EHWO', 'EHYB', 'EHYP', 'EIAB', 'EIBN', 'EIBR', 'EICA', 'EICB', 'EICK', 'EICL', 'EICM', 'EICN', 'EIDL', 'EIDW', 'EIIM',
                        'EIKL', 'EIKN', 'EIKY', 'EIME', 'EIMH', 'EIMY', 'EINN', 'EIRT', 'EISG', 'EIWF', 'EIWT', 'EKAC', 'EKAH', 'EKBI', 'EKCC', 'EKCH', 'EKEB', 'EKHG', 'EKKA', 'EKKL',
                        'EKKS', 'EKLV', 'EKMB', 'EKOD', 'EKRD', 'EKRK', 'EKRN', 'EKSB', 'EKSL', 'EKSN', 'EKSP', 'EKSV', 'EKTS', 'EKVH', 'EKVJ', 'EKYT', 'EKVD', 'EKRH', 'EKSH', 'EKTR',
                        'EKVG', 'EKFA', 'EKKV', 'EKMS', 'EKSY', 'EKSR', 'EKSO', 'EKTB', 'ELEA', 'ELET', 'ELLC', 'ELLK', 'ELLX', 'ELLZ', 'ELNT', 'ELUS', 'ENAL', 'ENAN', 'ENAS', 'ENAT',
                        'ENBJ', 'ENBL', 'ENBM', 'ENBN', 'ENBO', 'ENBR', 'ENBS', 'ENBV', 'ENCN', 'ENDI', 'ENDR', 'ENDU', 'ENEG', 'ENEN', 'ENEV', 'ENFB', 'ENFG', 'ENFL', 'ENFR', 'ENGA',
                        'ENGC', 'ENGK', 'ENGM', 'ENHA', 'ENHD', 'ENHE', 'ENHF', 'ENHK', 'ENHS', 'ENHV', 'ENJA', 'ENJB', 'ENKB', 'ENKJ', 'ENKL', 'ENKR', 'ENLI', 'ENLK', 'ENMH', 'ENML',
                        'ENMS', 'ENNA', 'ENNM', 'ENNO', 'ENOA', 'ENOL', 'ENOP', 'ENOV', 'ENRA', 'ENRI', 'ENRK', 'ENRM', 'ENRO', 'ENRS', 'ENRV', 'ENRY', 'ENSA', 'ENSB', 'ENSD', 'ENSG',
                        'ENSH', 'ENSK', 'ENSM', 'ENSN', 'ENSO', 'ENSR', 'ENSS', 'ENST', 'ENSU', 'ENTX', 'ENTC', 'ENTO', 'ENUL', 'ENVA', 'ENVD', 'ENVR', 'ENZV', 'EPAR', 'EPBA', 'EPBC',
                        'EPBD', 'EPBK', 'EPBY', 'EPEL', 'EPGD', 'EPGI', 'EPGL', 'EPIN', 'EPIR', 'EPIW', 'EPJG', 'EPJS', 'EPKA', 'EPKE', 'EPKG', 'EPKK', 'EPKM', 'EPKP', 'EPKR', 'EPKS',
                        'EPKT', 'EPKZ', 'EPLB', 'EPLK', 'EPLL', 'EPLR', 'EPLR', 'EPLS', 'EPLU', 'EPMB', 'EPMI', 'EPML', 'EPMM', 'EPMO', 'EPNL', 'EPNT', 'EPOD', 'EPOK', 'EPOM', 'EPOP',
                        'EPPK', 'EPPL', 'EPPO', 'EPPT', 'EPRA', 'EPRG', 'EPRP', 'EPPR', 'EPRZ', 'EPSC', 'EPSR', 'EPST', 'EPSU', 'EPSY', 'EPTM', 'EPTO', 'EPWA', 'EPWK', 'EPWR', 'EPZA',
                        'EPZG', 'EPZP', 'EPZR', 'ESCF', 'ESCK', 'ESCM', 'ESCN', 'ESDF', 'ESFA', 'ESFH', 'ESFI', 'ESFJ', 'ESFM', 'ESFQ', 'ESFR', 'ESFS', 'ESFU', 'ESFY', 'ESGA', 'ESGC',
                        'ESGD', 'ESGE', 'ESGF', 'ESGG', 'ESGH', 'ESGI', 'ESGJ', 'ESGK', 'ESGL', 'ESGM', 'ESGP', 'ESGR', 'ESGS', 'ESGT', 'ESGU', 'ESGV', 'ESGY', 'ESIA', 'ESIB', 'ESKA',
                        'ESKB', 'ESKC', 'ESKD', 'ESKG', 'ESKH', 'ESKK', 'ESKM', 'ESKN', 'ESKO', 'ESKS', 'ESKT', 'ESKU', 'ESKV', 'ESKX', 'ESMA', 'ESMB', 'ESMC', 'ESMD', 'ESME', 'ESMF',
                        'ESMG', 'ESMH', 'ESMI', 'ESMJ', 'ESMK', 'ESML', 'ESMN', 'ESMO', 'ESMP', 'ESMQ', 'ESMR', 'ESMS', 'ESMT', 'ESMU', 'ESMV', 'ESMW', 'ESMX', 'ESMY', 'ESMZ', 'ESNA',
                        'ESNB', 'ESNC', 'ESND', 'ESNE', 'ESNF', 'ESNG', 'ESNH', 'ESNI', 'ESNJ', 'ESNK', 'ESNL', 'ESNM', 'ESNN', 'ESNO', 'ESNP', 'ESNQ', 'ESNR', 'ESNS', 'ESNT', 'ESNU',
                        'ESNV', 'ESNX', 'ESNY', 'ESNZ', 'ESOE', 'ESOH', 'ESOK', 'ESOL', 'ESOW', 'ESPA', 'ESPE', 'ESPG', 'ESPJ', 'ESQO', 'ESQP', 'ESSA', 'ESSB', 'ESSC', 'ESSD', 'ESSE',
                        'ESSF', 'ESSG', 'ESSH', 'ESSI', 'ESSK', 'ESSL', 'ESSM', 'ESSN', 'ESSP', 'ESST', 'ESSU', 'ESSV', 'ESSW', 'ESSX', 'ESSZ', 'ESTA', 'ESTF', 'ESTG', 'ESTL', 'ESTT',
                        'ESUA', 'ESUB', 'ESUD', 'ESUE', 'ESUF', 'ESUG', 'ESUH', 'ESUI', 'ESUJ', 'ESUK', 'ESUL', 'ESUM', 'ESUO', 'ESUP', 'ESUS', 'ESUT', 'ESUV', 'ESUY', 'ESVA', 'ESVB',
                        'ESVG', 'ESVH', 'ESVK', 'ESVL', 'ESVM', 'ESVQ', 'ESVS', 'EVAA', 'EVAD', 'EVAP', 'EVBA', 'EVCA', 'EVDA', 'EVEA', 'EVFA', 'EVGA', 'EVHB', 'EVIA', 'EVJA', 'EVJC',
                        'EVKA', 'EVLA', 'EVLI', 'EVLU', 'EVMA', 'EVMP', 'EVNA', 'EVPA', 'EVRA', 'EVRC', 'EVRS', 'EVSM', 'EVTE', 'EVVA', 'EYAL', 'EYBI', 'EYJB', 'EYKA', 'EYKD', 'EYKG',
                        'EYKL', 'EYKR', 'EYKS', 'EYKT', 'EYMA', 'EYMM', 'EYNA', 'EYND', 'EYNE', 'EYPA', 'EYPI', 'EYPK', 'EYPN', 'EYPP', 'EYPR', 'EYRK', 'EYRU', 'EYSA', 'EYSB', 'EYSE',
                        'EYSI', 'EYTR', 'EYTL', 'EYUT', 'EYVA', 'EYVC', 'EYVI', 'EYVK', 'EYVN', 'EYVP', 'EYZA', 'EYZE',
                        
                        'FAAB', 'FAAG', 'FAAN', 'FABE', 'FABL', 'FABM', 'FABU', 'FACD', 'FACN', 'FACT', 'FADN', 'FAEL', 'FAEM', 'FAER', 'FAFB', 'FAFK', 'FAGC', 'FAGG', 'FAGI', 'FAGM',
                        'FAHL', 'FAHR', 'FAHS', 'FAJS', 'FAKD', 'FAKF', 'FAKG', 'FAKM', 'FAKN', 'FAKO', 'FAKP', 'FAKR', 'FAKS', 'FAKU', 'FAKZ', 'FALA', 'FALC', 'FALE', 'FALK', 'FALM',
                        'FALW', 'FALY', 'FAMD', 'FAMG', 'FAMM', 'FAMN', 'FAMO', 'FAMS', 'FAMU', 'FAMW', 'FANC', 'FANG', 'FANS', 'FAOI', 'FAOH', 'FAOR', 'FAPA', 'FAPE', 'FAPG', 'FAPH',
                        'FAPI', 'FAPJ', 'FAPK', 'FAPM', 'FAPN', 'FAPP', 'FAPS', 'FAQT', 'FARB', 'FARG', 'FARS', 'FASB', 'FASC', 'FASD', 'FASE', 'FASH', 'FASK', 'FASS', 'FASZ', 'FATA',
                        'FATH', 'FATN', 'FATP', 'FATZ', 'FAUL', 'FAUP', 'FAUT', 'FAVB', 'FAVG', 'FAVR', 'FAVW', 'FAVY', 'FAWB', 'FAWC', 'FAWK', 'FAWM', 'FAYP',

                         





                        




                        ) {
                            return true;
                        } else {
                            return false;
                        }
        }
        tagName = "locationindicator";
    }

    //returns true if it is a valid string, otherwise False
    export class flightTypeValidator implements Validation.IStringValidator{
        isAcceptable (value: string) {
            var flightType = [ 'G', 'S', 'N', 'M', 'V' ];

            if(value in flightType) {
                return true;
            } else {
                return false;
            }
        }
        tagName = "flighttype";

            //if (value = 'G', 'S', 'N', 'M', 'V') { //in flight type, there are five different types
                //return true;
            //} else {
                //return false;
            //}
        //}
    }

    //return ture if is a valid gufi code number, otherwise false
    export class gufiValidator {
        isAcceptable(value: string) {
            
            if (/^\d{8}-\d{4}-\d{4}-\d{4}-\d{12}$/.test(value)) {
                return true;
            }
            
            //accept only dashes, digits and strings
            if (/^[A-Za-z]+$[^0-9\-]+/.test(value)) {
                return false;
            }
            value = value.replace(/\D\d/g, "");

            //setting min
            if (value.length < 36) {
                return false;
            }
        }
        tagName = "gufi"
    }

}
export = Validators;
