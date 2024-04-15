searchState.loadedDescShard("alloy_rpc_client", 0, "alloy-rpc-client\nA batch JSON-RPC request, used to bundle requests into a …\nConnection string for built-in transports.\nA builder for the transport  <code>RpcClient</code>.\nA borrowed <code>RpcClient</code>.\nHTTP transport.\nIPC transport.\nAn IPC Connection object.\nA channel yielding responses from a poller task.\nA poller task builder.\nA prepared, but unsent, RPC call.\nA JSON-RPC client.\nAn <code>RpcClient</code> in a <code>Weak</code> reference.\nWebSocket transport.\nSimple connection details for a websocket connection.\nThe authorization header to use.\nThe channels to send the responses through.\nThe client to poll with.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRequest Method\nCreates a new websocket connection configuration.\nCreate a new IPC connection object for any type T that can …\nThe requests to be sent.\nThe transport via which the batch will be sent.\nThe URL to connect to.\nCreates a new websocket connection configuration with an …\nA batch JSON-RPC request, used to bundle requests into a …\nAwaits a single response for a request that has been …\nAdd a call to the batch.\nThe channels to send the responses through.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new batch request.\nThe requests to be sent.\nSend the batch future via its connection.\nThe transport via which the batch will be sent.\nA builder for the transport  <code>RpcClient</code>.\nConnect a transport, producing an <code>RpcClient</code> with the …\nConnect a transport, producing an <code>RpcClient</code> with a …\nReturns the argument unchanged.\nConvenience function to create a new <code>RpcClient</code> with a …\nConvenience function to create a new <code>RpcClient</code> with a <code>hyper</code>…\nCalls <code>U::from(self)</code>.\nConnect an IPC transport, producing an <code>RpcClient</code> with the …\nAdd a middleware layer to the stack.\nConnect a pubsub transport, producing an <code>RpcClient</code> with …\nCreate a new <code>RpcClient</code> with the given transport and the …\nConnect a WS transport, producing an <code>RpcClient</code> with the …\nConnection string for built-in transports.\nHTTP transport.\nIPC transport.\nWebSocket transport.\nConnect with the given connection string.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTries to parse the given string as an HTTP URL.\nTries to parse the given string as an IPC path, returning …\nTries to parse the given string as a WebSocket URL.\nThe states of the <code>RpcCall</code> future.\nA prepared, but unsent, RPC call.\nConvert this future into a boxed, pinned future, erasing …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this call into one with owned params, by cloning …\nReturns <code>true</code> if the request is a subscription.\nGet a mutable reference to the params of the request.\nReturns a reference to the request.\nReturns a mutable reference to the request.\nSet the request to be a non-standard subscription (i.e. not\nA borrowed <code>RpcClient</code>.\nA JSON-RPC client.\nA JSON-RPC client.\nAn <code>RpcClient</code> in a <code>Weak</code> reference.\nBoxes the transport.\nType erase the service in the transport, allowing it to be …\nCreate a new <code>ClientBuilder</code>.\nGet the currently configured channel size. This is the …\nConnect to a transport via a <code>PubSubConnect</code> implementor.\nReturns the default poll interval for the client.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>RpcClient</code> with the given inner client.\nGet a <code>RawSubscription</code> for the given subscription ID.\nBorrow the client.\nGet a <code>Subscription</code> for the given subscription ID.\nGet a <code>Weak</code> reference to the client.\nThe next request ID to use.\nReserve a request ID value. This is used to generate …\nGet a reference to the client.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert the client into its inner type.\nConsumes the client and returns the underlying transport.\n<code>true</code> if the client believes the transport is local.\n<code>true</code> if the transport is local.\nBuild a <code>JsonRpcRequest</code> with the given method and params.\nCreates a new <code>RpcClient</code> with the given transport.\nCreate a new <code>RpcClient</code> with the given transport.\nCreate a new <code>BatchRequest</code> builder.\nCreate a new <code>RpcClient</code> with an HTTP transport.\nReserve a request ID u64.\nBuild a poller that polls a method with the given …\nPrepares an <code>RpcCall</code>.\nSet the <code>is_local</code> flag.\nReturns a reference to the underlying transport.\nThe underlying transport.\nReturns a mutable reference to the underlying transport.\nThe number of retries for polling a request.\nA channel yielding responses from a poller task.\nA poller task builder.\nReturns the channel size for the poller task.\nThe client to poll with.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nStarts the poller and returns the stream of responses.\nConverts the poll channel into a stream.\nConverts the poll channel into a stream that also yields …\nReturns the limit on the number of successful polls.\nRequest Method\nCreate a new poller task.\nReturns the duration between polls.\nResubscribe to the poller task.\nSets the channel size for the poller task.\nSets a limit on the number of successful polls.\nSets the duration between polls.\nStarts the poller in a new Tokio task, returning a channel …\nSets the channel size for the poller task.\nSets a limit on the number of successful polls.\nSets the duration between polls.")