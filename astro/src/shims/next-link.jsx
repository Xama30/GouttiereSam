import React from "react";

function isExternalHref(href) {
  return /^(https?:|mailto:|tel:|#)/.test(href);
}

function normalizeHref(href) {
  if (typeof href === "string") {
    return href;
  }

  if (href && typeof href === "object" && typeof href.pathname === "string") {
    return href.pathname;
  }

  return "/";
}

export default function NextLink({ href = "/", locale, children, ...rest }) {
  let resolvedHref = normalizeHref(href);

  if (!isExternalHref(resolvedHref)) {
    if (!resolvedHref.startsWith("/")) {
      resolvedHref = `/${resolvedHref}`;
    }

    if (locale === "en") {
      if (!resolvedHref.startsWith("/en")) {
        resolvedHref = resolvedHref === "/" ? "/en" : `/en${resolvedHref}`;
      }
    } else if (locale && locale !== "en") {
      resolvedHref = resolvedHref.replace(/^\/en(?=\/|$)/, "") || "/";
    }
  }

  return (
    <a href={resolvedHref} {...rest}>
      {children}
    </a>
  );
}
