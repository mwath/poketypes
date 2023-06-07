#!/usr/bin/sh

ROOT_DIR="$(realpath $(dirname "$0"))"
POKECLICKER_DIR="$(realpath "$(dirname "$0")/../pokeclicker")"
TYPE_OUT_DIR="${ROOT_DIR}/pokeclicker"
mkdir -p $TYPE_OUT_DIR

cd $POKECLICKER_DIR

echo "build Pokecliker modules"
npm run clean && npm start

echo "export Pokecliker declarations"
npx tsc -d --emitDeclarationOnly --outDir ./out

echo "Copy declaration files"
cp "${POKECLICKER_DIR}/src/scripts/GameConstants.d.ts" "${TYPE_OUT_DIR}"
rsync -a "${POKECLICKER_DIR}/src/declarations/" "${TYPE_OUT_DIR}"
rsync -a "${POKECLICKER_DIR}/out/" "${TYPE_OUT_DIR}"

