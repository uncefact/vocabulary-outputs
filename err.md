Exception in thread "main" java.nio.file.FileAlreadyExistsException: ./_classes
	at java.base/sun.nio.fs.UnixException.translateToIOException(UnixException.java:94)
	at java.base/sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:111)
	at java.base/sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:116)
	at java.base/sun.nio.fs.UnixFileSystemProvider.createDirectory(UnixFileSystemProvider.java:389)
	at java.base/java.nio.file.Files.createDirectory(Files.java:690)
	at org.unece.uncefact.vocab.md.DomainsToMD.generate(DomainsToMD.java:20)
	at org.unece.uncefact.vocab.Runner.main(Runner.java:115)
