function Login({ onboard, signer, connected, setConnected, className, mint }) {
  const login = async () => {
    const select = await onboard.walletSelect();
    if (select) {
      const res = await onboard.walletCheck();
      if (res) {
        setConnected(true);
      }
    }
  };

  return (
    <p className={className} onClick={login}>
      {console.log(mint)}
      {connected
        ? signer?.provider?.provider?.selectedAddress.substring(0, 6) +
          "..." +
          signer?.provider?.provider?.selectedAddress.substring(36)
        : mint
        ? ""
        : "Connect Wallet"}
    </p>
  );
}

export default Login;
