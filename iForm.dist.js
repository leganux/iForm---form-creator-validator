var iForm = function (w, x, y) {
    this.makeid = function (a) {
        a || (a = 10);
        for (var c = "", d = 0; d < a; d++) {
            c += "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz_0123456789".charAt(Math.floor(64 * Math.random()));
        }
        return c;
    };
    this.HTML_ID = this.makeid(10);
    this.Space = w;
    this.ObjArray = x;
    this.options = y;
    this.selectors = [];
    this.drawForm = function () {
        $("head").append("<style>        .form-control-file {            width: 100%;            height: 39px;            padding: 6px 12px;            background-color: #fff;            border: 1px solid #ccc;            border-radius: 4px;            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);            -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;        }        label {            font-weight: 700;            display: inline-block;            margin-bottom: 5px;        }        .form-control-error {            border-color: #D0021B;        }        .form-text-error {            color: #D0021B;        }    </style>");
        var a = this, c = a.options, d = "", e = "", f = "", b = "";
        c.formClass && "" !== c.formClass && (d = c.formClass);
        c.action && "" !== c.action && (e = c.action);
        c.formMethod && "" !== c.formMethod && (f = c.formMethod);
        c.enctype && "" !== c.enctype && (b = c.enctype);
        c = '<form action="' + e + '" id="' + a.HTML_ID + '" enctype="' + b + '" class="' + d + '" method="' + f + '">  </form>';
        $(this.Space).html(c);
        $.each(a.ObjArray, function (c, b) {
            if (b.type) {
                var d = "", e = a.makeid(7);
                a.ObjArray[c].lx_cm = e;
                a.selectors.push($("[lx_cm=" + e + "]"));
                var f = "", m = "", h = "", n = "", p = "", q = "", r = "", k = "", t = "";
                b.tooltip && "" !== b.tooltip && (t = '<span id="_tooltip' + b.lx_cm + '_" data-alignment="top" data-tooltip data-position="left" title="' + b.tooltip + '" ><i class="fa fa-fw fa-map-pin"></i></span>');
                b.placeholder && "" !== b.placeholder && (k = b.placeholder);
                b["class"] && "" !== b["class"] && (f = b["class"]);
                b.name && "" !== b.name && (r = b.name);
                b.id && "" !== b.id && (m = b.id);
                b.style && "" !== b.style && (h = b.style);
                b.attrib && "" !== b.attrib && (n = b.attrib);
                b.label && "" !== b.label && (p = b.label);
                a.options.separator && "" !== a.options.separator && (d = a.options.separator);
                eval(b.mandatory) && (q = '<span class="form-text" id="' + e + '_Ast"> * </span>');
                switch (b.type) {
                    case "file":
                        k = "";
                        b.accept && "" !== b.accept && (k = b.accept);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><input lx_cm="' + e + '" type="file" accept="' + k + '" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' ><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        break;
                    case "text":
                        var l = "";
                        b.maxLength && "" !== b.maxLength && (l = b.maxLength);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><input lx_cm="' + e + '" type="text" placeholder="' + k + '" maxlength="' + l + '" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' ><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        break;
                    case "textarea":
                        l = "";
                        b.maxLength && "" !== b.maxLength && (l = b.maxLength);
                        var u = "";
                        b.rows && "" !== b.rows && (u = b.rows);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><textarea lx_cm="' + e + '" placeholder="' + k + '" rows="' + u + '" type="text" maxlength="' + l + '" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' ></textarea><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        break;
                    case "select":
                        k = "Select an item ...";
                        a.options.textForSelect && (k = a.options.textForSelect);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><select lx_cm="' + e + '" type="text" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' > <option value="-1"> ' + k + '</option></select><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        b.items && $.each(b.items, function (a, b) {
                            var c = a + 1;
                            b.value && "" !== b.value && (c = b.value);
                            $('[lx_cm="' + e + '"]').append('<option value="' + c + '" >' + b.text + "</option>");
                        });
                        break;
                    case "password":
                        l = "";
                        b.maxLength && "" !== b.maxLength && (l = b.maxLength);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><input lx_cm="' + e + '" autocomplete="off" type="password" placeholder="' + k + '" maxlength="' + l + '" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' ><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        break;
                    case "number":
                        l = "";
                        b.maxLength && "" !== b.maxLength.toString() && (l = b.maxLength);
                        u = "";
                        b.maxNumber && "" !== b.maxNumber.toString() && (u = b.maxNumber);
                        var v = "";
                        b.minNumber && "" !== b.minNumber.toString() && (v = b.minNumber);
                        $("#" + a.HTML_ID).append(d + '<label class="form-text"> ' + p + q + ": " + t + ' </label><br><input lx_cm="' + e + '" placeholder="' + k + '"  min="' + v + '" max="' + u + '" type="number" maxlength="' + l + '" name="' + r + '" id="' + m + '" class="' + f + '" style="' + h + '"  ' + n + ' ><small id="' + e + '_mini" style="display: none;" class="form-text form-text-error" >Verifica la informaci&oacute;n</small>');
                        break;
                    default:
                        console.warn("unrecognized type " + b.type);
                }
            } else {
                console.warn("unset type for field no " + c);
            }
        });
    };
    this.drawSubmit = function (a, c, d, e) {
        d || (d = this.makeid());
        c || (c = "");
        a || (a = "send");
        $("#" + this.HTML_ID).append('<br><input class="' + c + '" type="submit" value="' + a + '" id="' + d + '">');
        !0 === e && $("#" + d).click(function (a) {
            a.preventDefault();
        });
    };
    this.inicialize = function (a, c) {
        var d = this, e = "file text textarea select password number".split(" ");
        $.each(d.ObjArray, function (c, b) {
            b.errors = [];
            if (b.lx_cm && b.type && e.includes(b.type) && b.options && b.options.validateOn) {
                var f = b.options.validateOn, h = [];
                b.options.skipUntilEndValidation && (h = b.options.skipUntilEndValidation);
                var g = b.lx_cm;
                f.includes("keyUp") && $('[lx_cm="' + g + '"]').keyup(function () {
                    d.resetField(b.lx_cm);
                    var c = d.validations(d, b, h);
                    !1 === c.success && a && $.isFunction(a) && a(c.errors);
                });
                f.includes("keyDown") && $('[lx_cm="' + g + '"]').keydown(function () {
                    d.resetField(b.lx_cm);
                    var c = d.validations(d, b, h);
                    !1 === c.success && a && $.isFunction(a) && a(c.errors);
                });
                f.includes("Change") && $('[lx_cm="' + g + '"]').change(function () {
                    d.resetField(b.lx_cm);
                    var c = d.validations(d, b, h);
                    !1 === c.success && a && $.isFunction(a) && a(c.errors);
                });
                f.includes("Click") && $('[lx_cm="' + g + '"]').click(function () {
                    d.resetField(b.lx_cm);
                    var c = d.validations(d, b, h);
                    !1 === c.success && a && $.isFunction(a) && a(c.errors);
                });
                $('[lx_cm="' + g + '"]').change(function () {
                    var a = $('[lx_cm="' + g + '"]').val();
                    "number" === b.type && "" !== a && b.numberOfDecimals && "" !== b.numberOfDecimals && (a = 0 === Number(b.numberOfDecimals) ? Math.trunc(d.CutDecimals(Number(a), b.numberOfDecimals), 0) : d.CutDecimals(Number(a), b.numberOfDecimals), $('[lx_cm="' + g + '"]').val(a));
                    "file" === b.type && b.accept && b.accept.toUpperCase().includes("PDF") && d.extChanged(d, b);
                    "file" === b.type && b.options.getDataAs && "" !== b.options.getDataAs ? (b.data = "", d.chargeData(d, b, b.options.getDataAs)) : b.data = "select" === b.type && b.options.getDataAs && "text" === b.options.getDataAs ? $('[lx_cm="' + g + '"] option:selected').text() : $('[lx_cm="' + g + '"]').val();
                });
                $('[lx_cm="' + g + '"]').change(function () {
                    if ("text" === b.type) {
                        if (b.options && b.options.toUpperCase) {
                            var a = $('[lx_cm="' + g + '"]').val();
                            $('[lx_cm="' + g + '"]').val(a.toUpperCase());
                        }
                        b.options && b.options.toLowerCase && (a = $('[lx_cm="' + g + '"]').val(), $('[lx_cm="' + g + '"]').val(a.toLowerCase()));
                        b.options && b.options.forceLimits && b.maxLength && (a = $('[lx_cm="' + g + '"]').val(), $('[lx_cm="' + g + '"]').val(a.substring(1, Number(b.maxLength))));
                    }
                    "textarea" === b.type && (b.options && b.options.toUpperCase && (a = $('[lx_cm="' + g + '"]').val(), $('[lx_cm="' + g + '"]').val(a.toUpperCase())), b.options && b.options.toLowerCase && (a = $('[lx_cm="' + g + '"]').val(), $('[lx_cm="' + g + '"]').val(a.toLowerCase())));
                    "number" === b.type && b.options && b.options.forceLimits && b.maxLength && (a = $('[lx_cm="' + g + '"]').val(), $('[lx_cm="' + g + '"]').val(a.substring(0, Number(b.maxLength))));
                });
                ("password" === b.type || "text" === b.type) && b.options && b.options.disableCopyPaste && d.disableCopyPaste(b.lx_cm);
            }
            try {
                $("#_tooltip" + b.lx_cm + "_").tooltip();
            } catch (z) {
                setTimeout(function () {
                    try {
                        $("#_tooltip" + b.lx_cm + "_").tooltip();
                    } catch (A) {
                        try {
                            var a = $("#_tooltip" + b.lx_cm + "_");
                            new Foundation.Tooltip(a, {});
                        } catch (B) {
                            try {
                                a = $("#_tooltip" + b.lx_cm + "_"), new Foundation.Tooltip(a, {});
                            } catch (n) {
                            }
                        }
                    }
                }, 2E3);
            }
        });
        c && $.isFunction(c) && c();
    };
    this.getData = function (a, c) {
        c || (c = "value");
        var d = "", e = -1;
        a && isNaN(a) && a.includes("id:") || a && isNaN(a) && a.includes("class:") ? (a = a.replace("id:", "#"), a = a.replace("class", "."), d = $(a).attr("lx_cm"), e = this.findOutIn(d, this)) : a && !isNaN(a) && (a > this.ObjArray.length ? console.warn("No se encuentra el  elemento solicitado") : (d = this.ObjArray[a - 1].lx_cm, e = a));
        if (d && -1 !== e && "select" === this.ObjArray[e].type) {
            if ("text" === c) {
                return $("[lx_cm='" + d + "'] option:selected").text();
            }
            if ("value" === c) {
                return $("[lx_cm='" + d + "']").val();
            }
        } else {
            if (d && -1 !== e && "file" === this.ObjArray[e].type.trim().toLowerCase()) {
                if ("content" === c) {
                    return this.ObjArray[e].data ? this.ObjArray[e].data : "";
                }
                if ("value" === c) {
                    return $("[lx_cm='" + d + "']").val().replace("C:\\fakepath\\", "");
                }
                if ("ext" === c) {
                    return d = $("[lx_cm='" + d + "']").val().replace("C:\\fakepath\\", ""), "" !== d ? (d = d.split("."), "." + d[1]) : "";
                }
                if ("namefile" === c) {
                    return d = $("[lx_cm='" + d + "']").val().replace("C:\\fakepath\\", ""), "" !== d ? (d = d.split("."), d[0]) : "";
                }
            } else {
                if (d && "file" !== this.ObjArray[e].type && "select" !== this.ObjArray[e].type) {
                    return $("[lx_cm='" + d + "']").val();
                }
                var f = [];
                $.each(this.ObjArray, function (a, c) {
                    "file" === c.type && c.data ? f.push(c.data) : f.push($('[lx_cm="' + c.lx_cm + '"]').val());
                });
                return f;
            }
        }
        return !1;
    };
    this.setData = function (a, c) {
        if (a && isNaN(a) && a.includes("id:") || a && isNaN(a) && a.includes("class:")) {
            a = a.replace("id:", "#");
            a = a.replace("class", ".");
            var d = $(a).attr("lx_cm");
            $('[lx_cm = "' + d + '"]').val(c);
        } else {
            a && !isNaN(a) ? a > this.ObjArray.length ? console.warn("No se encuentra el  elemento solicitado") : (d = this.ObjArray[a - 1].lx_cm, $('[lx_cm = "' + d + '"]').val(c)) : console.warn("No se encuentra el  elemento solicitado");
        }
    };
    this.getAllSelectors = function () {
        return this.selectors;
    };
    this.validate = function () {
        var a = this, c = [], d = "file text textarea select password number".split(" ");
        $.each(a.ObjArray, function (e, f) {
            a.resetField(f.lx_cm);
            f.errors = [];
            var b = [];
            f.options.skipAtEndValidation && f.options && (b = f.options.skipAtEndValidation);
            f.lx_cm && f.type && d.includes(f.type) && (b = a.validations(a, f, b), b.success || (c.push(b.errors), f.errors.push(b.errors)));
            "file" === f.type && f.accept && f.accept.toUpperCase().includes("PDF") && !f.successPDF && f.data && "" !== f.data && (b = "File isn't PDF or is corrupted", a.options && a.options.textsErr && a.options.textsErr.ErrPDF && "" !== a.options.textsErr.ErrPDF && (b = a.options.textsErr.ErrPDF), c.push([b]), f.errors.push([b]), a.drawError(f.lx_cm, b));
        });
        return 0 < c.length ? {success: !1, errors: c} : {success: !0, errors: "none"};
    };
    this.getFormAsSelector = function () {
        return $("#" + this.HTML_ID);
    };
    this.disableElement = function (a) {
        a && isNaN(a) && a.includes("id:") || a && isNaN(a) && a.includes("class:") ? (a = a.replace("id:", "#"), a = a.replace("class", "."), $(a).prop("disabled", !0)) : a && !isNaN(a) ? a > this.ObjArray.length ? console.warn("No se encuentra el  elemento solicitado") : $('[lx_cm = "' + this.ObjArray[a - 1].lx_cm + '"]').prop("disabled", !0) : console.warn("No se encuentra el  elemento solicitado");
    };
    this.enableElement = function (a) {
        a && isNaN(a) && a.includes("id:") || a && isNaN(a) && a.includes("class:") ? (a = a.replace("id:", "#"), a = a.replace("class", "."), $(a).prop("disabled", !0)) : a && !isNaN(a) ? a > this.ObjArray.length ? console.warn("No se encuentra el  elemento solicitado") : $('[lx_cm = "' + this.ObjArray[a - 1].lx_cm + '"]').prop("disabled", !1) : console.warn("No se encuentra el  elemento solicitado");
    };
    this.getElementAsSelector = function (a) {
        if (a && isNaN(a) && a.includes("id:") || a && isNaN(a) && a.includes("class:")) {
            return a = a.replace("id:", "#"), a = a.replace("class", "."), a = $(a).attr("lx_cm"), $('[lx_cm = "' + a + '"]');
        }
        if (a && !isNaN(a)) {
            if (a > this.ObjArray.length) {
                console.warn("No se encuentra el  elemento solicitado");
            } else {
                return a = this.ObjArray[a - 1].lx_cm, $('[lx_cm = "' + a + '"]');
            }
        } else {
            console.warn("No se encuentra el  elemento solicitado");
        }
    };
    this.findOutIn = function (a, c) {
        var d = -1;
        $.each(c.ObjArray, function (c, f) {
            f.lx_cm && f.lx_cm === a && (d = c);
        });
        return d;
    };
    this.waitForEl = function (a, c) {
        jQuery(a).length ? c() : setTimeout(function () {
            waitForEl(a, c);
        }, 100);
    };
    this.chargeData = function (a, c, d) {
        a = $('[lx_cm = "' + c.lx_cm + '"]').val();
        if (!a || "" === a) {
            return c.data = "", 0;
        }
        a = document.querySelectorAll('[lx_cm ="' + c.lx_cm + '"]')[0].files[0];
        if ("text" === d) {
            var e = new FileReader;
            e.onload = function (a) {
                c.data = e.result;
            };
            e.readAsText(a);
        }
        "b64" === d && (e = new FileReader(a), e.onload = function (a) {
            c.data = e.result;
        }, e.readAsDataURL(a));
    };
    this.extChanged = function (a, c) {
        var d = $('[lx_cm = "' + c.lx_cm + '"]').val();
        if (!d || "" === d) {
            return c.data = "", 0;
        }
        d = document.querySelectorAll('[lx_cm ="' + c.lx_cm + '"]')[0].files[0];
        var e = new FileReader(d);
        e.onload = function (d) {
            e.result.split("\n").shift().toString().toUpperCase().includes("PDF") ? c.successPDF = !0 : (c.successPDF = !1, d = "File isn't PDF or is corrupted", a.options && a.options.textsErr && a.options.textsErr.ErrPDF && "" !== a.options.textsErr.ErrPDF && (d = a.options.textsErr.ErrPDF), a.drawError(c.lx_cm, d));
        };
        e.readAsText(d, "UTF-8");
    };
    this.validations = function (a, c, d) {
        var e = {};
        a.options.textsErr && (e = a.options.textsErr);
        var f = [];
        switch (c.type) {
            case "file":
                if (!d.includes("maxtam")) {
                    var b = a.validateFileSize(a, c, e);
                    b.success || f.push(b.message);
                }
                d.includes("accept") || (b = a.validateFileAccept(a, c, e), b.success || f.push(b.message));
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                d.includes("pattern") || (b = a.validatePatern(a, c, e), b.success || f.push(b.message));
                break;
            case "select":
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                break;
            case "text":
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                d.includes("pattern") || (b = a.validatePatern(a, c, e), b.success || f.push(b.message));
                d.includes("minLength") || (b = a.validateMinLength(a, c, e), b.success || f.push(b.message));
                d.includes("maxLength") || (b = a.validateMaxLength(a, c, e), b.success || f.push(b.message));
                d.includes("includes") || (b = a.validateIncludes(a, c, e), b.success || f.push(b.message));
                d.includes("matchTo") || (b = a.validateMatchTo(a, c), b.success || f.push(b.message));
                break;
            case "number":
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                d.includes("pattern") || (b = a.validatePatern(a, c, e), b.success || f.push(b.message));
                d.includes("minLength") || (b = a.validateMinLength(a, c, e), b.success || f.push(b.message));
                d.includes("maxLength") || (b = a.validateMaxLength(a, c, e), b.success || f.push(b.message));
                d.includes("includes") || (b = a.validateIncludes(a, c, e), b.success || f.push(b.message));
                d.includes("matchTo") || (b = a.validateMatchTo(a, c), b.success || f.push(b.message));
                d.includes("minNumber") || (b = a.validateMinNumber(a, c, e), b.success || f.push(b.message));
                d.includes("maxNumber") || (b = a.validateMaxNumber(a, c, e), b.success || f.push(b.message));
                break;
            case "textarea":
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                d.includes("pattern") || (b = a.validatePatern(a, c, e), b.success || f.push(b.message));
                d.includes("minLength") || (b = a.validateMinLength(a, c, e), b.success || f.push(b.message));
                d.includes("maxLength") || (b = a.validateMaxLength(a, c, e), b.success || f.push(b.message));
                d.includes("includes") || (b = a.validateIncludes(a, c, e), b.success || f.push(b.message));
                d.includes("matchTo") || (b = a.validateMatchTo(a, c), b.success || f.push(b.message));
                break;
            case "password":
                d.includes("mandatory") || (b = a.validateMandatory(a, c, e), b.success || f.push(b.message));
                d.includes("unique") || (b = a.validateUnique(a, c, e), b.success || f.push(b.message));
                d.includes("minLength") || (b = a.validateMinLength(a, c, e), b.success || f.push(b.message));
                d.includes("maxLength") || (b = a.validateMaxLength(a, c, e), b.success || f.push(b.message));
                d.includes("matchTo") || (b = a.validateMatchTo(a, c), b.success || f.push(b.message));
                d.includes("password") || (b = a.validatePassword(a, c, e), b.success || f.push(b.message));
                break;
            default:
                console.warn("unrecognized type " + c.type);
        }
        return 0 < f.length ? (a.drawError(c.lx_cm, f.join(", ")), {success: !1, errors: f}) : {
            success: !0,
            errors: "none"
        };
    };
    this.validateFileSize = function (a, c, d) {
        a = "File size is greater than _XX_ MB";
        d.ErrMaxSize && (a = d.ErrMaxSize);
        return (d = $('[lx_cm ="' + c.lx_cm + '"]').val()) && "" !== d ? ($('[lx_cm ="' + c.lx_cm + '"]')[0].files[0].size > 1048576 * c.maxtam ? (c.errors.push("maxtam"), c = {
            success: !1,
            message: a.replace("_XX_", c.maxtam.toString())
        }) : c = {success: !0, message: "none"}, c) : c = {success: !0, message: "none"};
    };
    this.validateFileAccept = function (a, c, d) {
        a = $('[lx_cm = "' + c.lx_cm + '"]').val();
        if (!a || "" === a) {
            return c = {success: !0, message: "none"};
        }
        a = "File format _XX_ is invalid";
        d.ErrFileAccept && (a = d.ErrFileAccept);
        d = document.querySelectorAll('[lx_cm="' + c.lx_cm + '"]');
        d = d[0];
        return c = d.value.toUpperCase().includes(c.accept.toUpperCase()) ? {
            success: !0,
            message: "none"
        } : {success: !1, message: a.replace("_XX_", c.accept)};
    };
    this.validateMandatory = function (a, c, d) {
        a = "This filed is mandatory";
        d.ErrMandatory && (a = d.ErrMandatory);
        return !0 === c.mandatory && (d = $('[lx_cm ="' + c.lx_cm + '"]').val(), "select" === c.type && -1 === Number(d) || "select" !== c.type && "" === d.toString()) ? (c.errors.push("mandatory"), c = {
            success: !1,
            message: a
        }) : c = {success: !0, message: "none"};
    };
    this.validateUnique = function (a, c, d) {
        var e = "This was insert in another field", f = {};
        d.ErrUnique && (e = d.ErrUnique);
        var b = $('[lx_cm ="' + c.lx_cm + '"]').val();
        if (!0 === c.unique && "" !== b) {
            var m = 0;
            $("form#" + a.HTML_ID + " :input").each(function () {
                var d = $(this).attr("lx_cm");
                $(this).val() === b && (m++, d !== c.lx_cm && a.drawError(d, e));
            });
            if (2 <= m) {
                return f = {success: !1, message: e};
            }
        }
        return f = {success: !0, message: "none"};
    };
    this.validateMatchTo = function (a, c) {
        var d = "This field not match with  field ";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        if ("file" !== c.type && "" !== e && c.options && c.options.matchTo && "" !== c.options.matchTo) {
            c.options.matchToText && (d = c.options.matchToText);
            var f = c.options.matchTo;
            f = f.replace("id:", "#");
            f = f.replace("class:", ".");
            var b = $(f).attr("lx_cm");
            if ($(f).val() !== e) {
                return e = {success: !1, message: d}, a.drawError(b, d), e;
            }
        }
        return e = {success: !0, message: "none"};
    };
    this.validatePatern = function (a, c, d) {
        var e = "Pattern  not match ", f = $('[lx_cm ="' + c.lx_cm + '"]').val();
        "file" === c.type && (f = f.replace("C:\\fakepath\\", ""), c.accept && (f = f.replace(c.accept, "")), f = f.replace(/\\/g, ""), f = f.replace(/\./g, ""));
        if ("" !== f && c.pattern && "" !== c.pattern) {
            if ("alphanumeric" === c.pattern) {
                if (d.ErrPatternAlph && (e = d.ErrPatternAlph), a = a.validateAlphanumeric(f), !a) {
                    return e = {success: !1, message: e};
                }
            } else {
                if ("numeric" === c.pattern) {
                    if (d.ErrPatternNumeric && (e = d.ErrPatternNumeric), isNaN(f)) {
                        return e = {success: !1, message: e};
                    }
                } else {
                    if (d.ErrPattern && (e = d.ErrPattern), a = a.validateTestPattern(f, c.pattern), !a) {
                        return e = {success: !1, message: e};
                    }
                }
            }
        }
        return e = {success: !0, message: "none"};
    };
    this.validateMinLength = function (a, c, d) {
        a = "Content is too short, must be at least _XX_ long";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrMinLength && (a = d.ErrMinLength);
        return "file" !== c.type && "" !== e && c.minLength && "" !== c.minLength && e.length < Number(c.minLength) ? c = {
            success: !1,
            message: a.replace("_XX_", c.minLength)
        } : c = {success: !0, message: "none"};
    };
    this.validateMaxLength = function (a, c, d) {
        a = "Content is too long, must be as _XX_ at long";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrMaxLength && (a = d.ErrMaxLength);
        return "file" !== c.type && "" !== e && c.maxLength && "" !== c.maxLength && e.length > Number(c.maxLength) ? c = {
            success: !1,
            message: a.replace("_XX_", c.maxLength)
        } : c = {success: !0, message: "none"};
    };
    this.validateIncludes = function (a, c, d) {
        a = "Content don't include _XX_";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrIncludes && (a = d.ErrIncludes);
        return "file" !== c.type && "" !== e && c.includes && "" !== c.includes && !e.includes(c.includes) ? c = {
            success: !1,
            message: a.replace("_XX_", c.includes)
        } : c = {success: !0, message: "none"};
    };
    this.validateAlphanumeric = function (a) {
        return !/[^a-z\d]/i.test(a);
    };
    this.validateTestPattern = function (a, c) {
        return !c.test(a);
    };
    this.drawError = function (a, c) {
        $('[lx_cm ="' + a + '"]').addClass("form-control-error");
        $("#" + a + "_Ast").addClass("form-text-error");
        $("#" + a + "_mini").addClass("form-text-error").show().html(c);
    };
    this.resetField = function (a) {
        $('[lx_cm ="' + a + '"]').removeClass("form-control-error");
        $("#" + a + "_Ast").removeClass("form-text-error");
        $("#" + a + "_mini").removeClass("form-text-error").hide().html("");
    };
    this.validateMinNumber = function (a, c, d) {
        a = "Number is grather than _XX_ ";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrMinNum && (a = d.ErrMinNum);
        return "number" === c.type && "" !== e && c.minNumber && e < Number(c.minNumber) ? c = {
            success: !1,
            message: a.replace("_XX_", c.minNumber)
        } : c = {success: !0, message: "none"};
    };
    this.validateMaxNumber = function (a, c, d) {
        a = "Number is less than _XX_ ";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrMaxNum && (a = d.ErrMaxNum);
        return "number" === c.type && "" !== e && c.maxNumber && e > Number(c.maxNumber) ? c = {
            success: !1,
            message: a.replace("_XX_", c.maxNumber)
        } : c = {success: !0, message: "none"};
    };
    this.validatePassword = function (a, c, d) {
        a = "Password format incorrect";
        var e = $('[lx_cm ="' + c.lx_cm + '"]').val();
        d.ErrPass && (a = d.ErrPass);
        if ("password" === c.type && "" !== e) {
            d = 0;
            if (c.minNumAlph) {
                var f = (e.match(/[a-z]/g) || []).length;
                f += (e.match(/[A-Z]/g) || []).length;
                f < c.minNumAlph && d++;
            }
            c.minNumEspChar && (e.match(/[._!+@#$%{}:;><^&*/]/g) || []).length < c.minNumEspChar && d++;
            c.minNumNum && (e.match(/[0-9]/g) || []).length < c.minNumNum && d++;
            if (0 < d) {
                return c = {success: !1, message: a};
            }
        }
        return c = {success: !0, message: "none"};
    };
    this.disableCopyPaste = function (a) {
        $('[lx_cm ="' + a + '"]').on("cut copy paste", function (a) {
            a.preventDefault();
        });
    };
    this.CutDecimals = function (a, c) {
        c || (c = 2);
        if (a.toString().includes(".")) {
            var d = a.toString(), e = d.split(".");
            if (e[1].length > c) {
                d = e[1].substr(0, c);
            } else {
                d = e[1].toString();
                for (var f = c - e[1].length, b = 0; b < f; b++) {
                    d += "0";
                }
            }
            return (e[0] + "." + d).toString();
        }
        if (0 === Number(c)) {
            return Math.trunc(Number(a)).toString();
        }
        d = a.toString();
        d += ".";
        for (b = 0; b < c; b++) {
            d += "0";
        }
        return d.toString();
    };
};