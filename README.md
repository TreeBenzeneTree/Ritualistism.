# RitualistismApp

This is a symbolic ritual Android app. Built with GitHub Actions support and CodeQL scanning.

## GitHub Actions
- Android Build: `.github/workflows/android-build.yml`
- CodeQL Security Scan: `.github/workflows/codeql.yml`

## To build locally (Android Studio or Pydroid):
```sh
./gradlew assembleDebug
```

## Notes
- Tokens not required for public repos.
- Use `ghp_...` tokens only for private automation.
