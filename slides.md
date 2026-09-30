---
marp: true
theme: codecommons
size: 16:9
paginate: false
title: Unified Data Model and Knowledge Graph
author: Andrew Nesbitt
description: Connecting package identities and security metadata to Software Heritage
---

# Unified Data Model and Knowledge Graph

<!-- _class: title-slide -->

Connecting software names and metadata to archived source

Andrew Nesbitt · ecosyste.ms

CodeCommons · 28 September 2026

<!--
0:00

On screen before speaking starts.
-->

---

# Andrew Nesbitt

<!-- _class: intro -->

I build **ecosyste.ms**: APIs and datasets about packages, repositories and dependencies.

I work with **Alpha-Omega** on open-source security, and with **OpenAlex** and **UT Austin** on connecting research papers to the software they cite.

I'm a package management nerd and write about it at [nesbitt.io](https://nesbitt.io/about/).

![ecosyste.ms w:280](assets/ecosystems-logo.svg) ![Alpha-Omega w:280](assets/alpha-omega-logo.svg) ![OpenAlex w:280](assets/openalex-logo.svg)

<!--
0:45

- ecosyste.ms
- Alpha-Omega security work
- OpenAlex/UT Austin research-software grant
-->

---

# Ecosyste.ms

![h:480](diagrams/ecosystems-scale.svg)

<!--
0:45

Repository URLs and package IDs join these datasets.

Counts overlap; don't add them. Sponsor counts aren't funding amounts.
-->

---

<!-- _class: registry-slide -->

# Package registries

![npmjs.org](assets/registries/npm.png)
![proxy.golang.org](assets/registries/golang.png)
![hub.docker.com](assets/registries/docker.png)
![pypi.org](assets/registries/pypi.png)
![nuget.org](assets/registries/nuget.png)
![repo1.maven.org](assets/registries/maven-central.png)
![packagist.org](assets/registries/packagist.png)
![crates.io](assets/registries/rust-lang.png)
![rubygems.org](assets/registries/rubygems.png)
![gem.coop](assets/registries/gem-coop.png)
![nixpkgs-unstable, nixpkgs-24.11, nixpkgs-24.05, nixpkgs-23.11, nixpkgs-23.05](assets/registries/nixos.png)
![cocoapods.org](assets/registries/cocoapods.png)
![pub.dev](assets/registries/dart-lang.png)
![bower.io](assets/registries/bower.png)
![metacpan.org](assets/registries/metacpan.png)
![alpine-edge, alpine-v3.23, alpine-v3.22, alpine-v3.21, alpine-v3.20, alpine-v3.19, alpine-v3.18, alpine-v3.17, alpine-v3.16, alpine-v3.15, alpine-v3.14, alpine-v3.13, alpine-v3.12, alpine-v3.11, alpine-v3.10, alpine-v3.9, alpine-v3.8, alpine-v3.7, alpine-v3.6, alpine-v3.5, alpine-v3.4, alpine-v3.3](assets/registries/alpinelinux.png)
![ubuntu-24.10, ubuntu-24.04, ubuntu-23.10, ubuntu-23.04, ubuntu-22.04, ubuntu-20.04](assets/registries/ubuntu.png)
![debian-13, debian-12, debian-11, debian-10](assets/registries/debian.png)
![github actions](assets/registries/actions.png)
![guix](assets/registries/guix-mirror.png)
![registry.terraform.io](assets/registries/hashicorp.png)
![hex.pm](assets/registries/hexpm.png)
![clojars.org](assets/registries/clojars.png)
![open-vsx.org](assets/registries/open-vsx.png)
![conda-forge.org](assets/registries/conda-forge.png)
![pkgsrc-netbsd-x86_64-10.1-all](assets/registries/pkgsrc.png)
![gentoo-portage](assets/registries/gentoo.png)
![hackage.haskell.org](assets/registries/haskell-infra.png)
![artifacthub.io](assets/registries/artifacthub.png)
![swiftpackageindex.com](assets/registries/swiftpackageindex.png)
![juliahub.com](assets/registries/juliaregistries.png)
![openbsd-7.9-amd64](assets/registries/openbsd.png)
![openindiana-hipster](assets/registries/openindiana.png)
![formulae.brew.sh](assets/registries/homebrew.png)
![spack.io](assets/registries/spack.png)
![pkg.adelielinux.org](assets/registries/adelielinux.png)
![forge.puppet.com](assets/registries/puppet.png)
![ctan.org](assets/registries/tex-82.png)
![deno.land](assets/registries/denoland.png)
![opam.ocaml.org](assets/registries/ocaml.png)
![anaconda.org](assets/registries/anaconda.png)
![f-droid.org](assets/registries/f-droid.png)
![repository.cloudera.com](assets/registries/cloudera.png)
![vcpkg.io](assets/registries/vcpkg.png)
![pkgs.racket-lang.org](assets/registries/racket-lang.png)
![package.elm-lang.org](assets/registries/elm.png)
![bioconductor.org](assets/registries/bioconductor.png)
![conan.io](assets/registries/conan-io.png)
![carthage](assets/registries/carthage.png)
![registry.bazel.build](assets/registries/bazelbuild.png)

<!--
0:30

Each registry has its own naming and version rules.

Several distribution releases share an avatar; image count differs from registry count.
-->

---

# Dependencies

![h:480](diagrams/repository-dependencies.svg)

<!--
1:00

25B+ dependency links recorded.

Keep commit + file path so each relationship can be checked against archived source.

SWH's documented API doesn't expose a resolved package dependency graph.
-->

---

# SBOMs

![h:480](diagrams/astropy-sbom.svg)

<!--
1:00

Astropy: community-developed astronomy software.

Enrichment starts with a purl; the missing step is tracing it to archived source.
-->

---

# packages.ecosyste.ms

![h:480](diagrams/astropy-package-model.svg)

<!--
3:00

Adapter per registry; feeds + forge events + sweeps keep records current.

One Rails service per concern, own Postgres, HTTP between them.

Shared upstream helps connect registries. Check version mappings and downstream backports.
-->

---

# repos.ecosyste.ms

![h:480](diagrams/astropy-repository-model.svg)

<!--
2:00

Default-branch manifests don't establish a release's dependencies; parse the tag separately.

One repository can publish several packages with different dependency sets.
-->

---

# advisories.ecosyste.ms

![h:480](diagrams/astropy-advisory-range.svg)

<!--
2:00

Verified before/after file bytes connect the fix to these releases.

A pin indicates potential exposure; exploitability depends on use.

Content SWHIDs calculated locally; archive presence still needs checking.
-->

---

# science.ecosyste.ms

![h:480](diagrams/astropy-research-path.svg)

<!--
2:00

A software-paper citation alone doesn't establish software use.

Science's current SWH scans cover default-branch checkouts; they can't establish which version a paper used.

These links could support software credit and adoption metrics.
-->

---

<!-- _class: triangle-slide -->

![w:1150](diagrams/zooko-triangle.svg)

<!--
1:00

Naming is hard; Zooko Wilcox-O'Hearn, 2001. Pick two.

Classic examples: DNS names, content hashes, petnames.

Package management hits this daily.
-->

---

<!-- _class: triangle-slide -->

![w:1150](diagrams/zooko-identifiers.svg)

<!--
1:00

A mention is meaningful but unverifiable,

a purl is meaningful and verifiable but only via the registry's authority,

a SWHID is verifiable and authority-free but means nothing to a human,

and the graph exists so you can walk between the three.
-->

---

# Package to Archive

![h:480](diagrams/astropy-package-repository.svg)

<!--
2:00

Repository URLs can be wrong; tags are conventions. Verify both.

Packaging can add or omit files, so the published tree can differ from Git.
-->

---

# Package to Archive

![h:480](diagrams/astropy-source-paths.svg)

<!--
2:30

The directories still differ after removing the archive's wrapper folder.

Return both with evidence so callers can choose. Wheels remain a separate preservation question.
-->

---

# Shared Content Addresses

![h:480](diagrams/astropy-checksum-link.svg)

<!--
2:00

SWH retains authority + fetcher + discovery date; ecosyste.ms indexes by purl.

CodeCommons ask: make this join queryable from the package side.
-->

---

# Unified Data Model

![w:1140](diagrams/astropy-metadata-graph.svg)

<!--
1:30

Each relationship needs its source and date; bindings change.

CodeCommons could maintain these mappings and expose verifiable paths to archived source.
-->

---

# Thank You · Q/A

<!-- _class: closing-slide -->

Andrew Nesbitt · andrew@ecosyste.ms

- [ecosyste.ms](https://ecosyste.ms/)
- [science.ecosyste.ms](https://science.ecosyste.ms/)
- [nesbitt.io](https://nesbitt.io/)

@andrew@mastodon.social

<!--
0:00

Left on screen during the ~10 minutes of questions.

Likely first question is "how does ecosyste.ms actually work under the hood":

one Rails service per concern, own Postgres, HTTP between them,

adapter per registry, everything joined on repository_url.
-->
