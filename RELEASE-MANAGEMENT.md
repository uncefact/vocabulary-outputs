# Release management for UN/CEFACT vocabularies publication

## UN/LOCODE

UN/LOCODE JSON-LD vocabulary [about page](https://vocabulary.uncefact.org/unlocode-about)

When a new release is created in https://github.com/uncefact/vocab-locode repo, the [update-unlocodes.yml](https://github.com/uncefact/vocabulary-outputs/actions/workflows/update-unlocodes.yml) workflow is triggered.
It downloads the release artifacts (.jsonld files), calls the utility and generates md files along with csv data files.
Then it creates a pull request named `chore: update UN/LOCODEs vocabulary` with the draft flag set to true. If err.md is empty, that means there were no errors during md and csv files generation.
The pull request needs to be reviewed, config files updated to reflect the UN/LOCODE version changed. Config update triggers a deployment to a test endpoint.
When the pull request is merged into a main branch after being approved, the [release.yml](https://github.com/uncefact/vocabulary-outputs/actions/workflows/release.yml) is run manually.
It updates the static website content in the S3 bucket and the release is finished. 
