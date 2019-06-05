var N=null,E="",T="t",U="u",searchIndex={};
var R=["client","result","acquired","helperthread","try_from","try_into","borrow","borrow_mut","type_id","typeid","formatter","HelperThread","Acquired"];

searchIndex["jobserver"]={"doc":"An implementation of the GNU make jobserver.","i":[[3,"Client","jobserver","A client of a jobserver",N,N],[3,R[12],E,"An acquired token from a jobserver.",N,N],[3,R[11],E,"Structure returned from `Client::into_helper_thread` to…",N,N],[11,"new",E,"Creates a new jobserver initialized with the given…",0,[[["usize"]],[[R[1],[R[0]]],[R[0]]]]],[11,"from_env",E,"Attempts to connect to the jobserver specified in this…",0,[[],[["option",[R[0]]],[R[0]]]]],[11,"acquire",E,"Acquires a token from this jobserver client.",0,[[["self"]],[[R[2]],[R[1],[R[2]]]]]],[11,"configure",E,"Configures a child process to have access to this client's…",0,[[["self"],["command"]]]],[11,"into_helper_thread",E,"Converts this `Client` into a helper thread to deal with a…",0,[[["f"]],[[R[3]],[R[1],[R[3]]]]]],[11,"acquire_raw",E,"Blocks the current thread until a token is acquired.",0,[[["self"]],[R[1]]]],[11,"release_raw",E,"Releases a jobserver token back to the original jobserver.",0,[[["self"]],[R[1]]]],[11,"request_token",E,"Request that the helper thread acquires a token,…",1,[[["self"]]]],[11,"to_owned",E,E,0,[[["self"]],[T]]],[11,"clone_into",E,E,0,[[[T],["self"]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[4],E,E,0,[[[U]],[R[1]]]],[11,R[5],E,E,0,[[],[R[1]]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[T]]],[11,R[8],E,E,0,[[["self"]],[R[9]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[4],E,E,2,[[[U]],[R[1]]]],[11,R[5],E,E,2,[[],[R[1]]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[T]]],[11,R[8],E,E,2,[[["self"]],[R[9]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[4],E,E,1,[[[U]],[R[1]]]],[11,R[5],E,E,1,[[],[R[1]]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[T]]],[11,R[8],E,E,1,[[["self"]],[R[9]]]],[11,"drop",E,E,2,[[["self"]]]],[11,"drop",E,E,1,[[["self"]]]],[11,"clone",E,E,0,[[["self"]],[R[0]]]],[11,"fmt",E,E,0,[[["self"],[R[10]]],[R[1]]]],[11,"fmt",E,E,2,[[["self"],[R[10]]],[R[1]]]],[11,"fmt",E,E,1,[[["self"],[R[10]]],[R[1]]]]],"p":[[3,"Client"],[3,R[11]],[3,R[12]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);