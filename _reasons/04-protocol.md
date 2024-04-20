---
number: 4
slug: protocol
title: How does the protocol work?
intro: The Spacemesh protocol is unique across all of crypto!
type: reason
---

The following is a much-simplified explanation of the Spacemesh protocol and mining. See the [consensus mechanism](https://spacemesh.io/blog/the-spacemesh-consensus-protocol/) document and [Smesher’s Guide](https://github.com/spacemeshos/wiki/wiki/Smesher-Guide) for the nitty gritty details.

1. **Consensus operation** — The Spacemesh consensus mechanism is based on two protocols operated by *eligible nodes*:
	- “Hare” — the fast organization of “layers”, containing blocks of transactions.
	- “Tortoise” — the slower, ultimate ratification of the blockchain state.
1. **Epochs** — Since “time” is an aspect of its consensus mechanism, Spacemesh activities happen within two-week cycles, known as “epochs”. For a smeshing node to participate and earn rewards in a given epoch, it must have established its eligibility in the *previous* epoch by publishing a “Proof of Space & Time” (PoST).
1. **PoST Init** — The first job of a smeshing node, however, is to create its cryptographically dedicated computer space, known as “postdata”—a process in which a unique node identifier is additionally created associated with that data. This process requires a GPU, and can take a lengthy period of time. After the data has been created, the node registers its data and ID with the network in a process known as “PoST Init”. At this point, it’s known by the network and ready to start participating.
1. **Eligibility** — A node establishes eligibility for participation in the *subsequent* epoch by interacting with “PoET” (Proof of Elapsed Time) servers, during a 12-hour window in the *current* epoch, known as the “Cycle Gap”. During a Cycle Gap, a smeshing node will receive a “time proof” calculated by the PoET server, used as input to calculate and submit back a “proof of space and time” to the PoET server, proving it maintained its dedicated disk space during the entirety of the previous epoch. Calculating that cryptographic proof involves the CPU and reading of the node’s postdata. This proof must be calculated and submitted within the 12-hour Cycle Gap window. If successful, this establishes the node’s eligibility to participate in, and receive rewards in particular “layers” in the *subsequent* epoch.


*Next* — Let’s now learn about [the team behind Spacemesh →](/team)